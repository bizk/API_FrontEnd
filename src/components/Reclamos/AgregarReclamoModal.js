import React from 'react';
import axios from 'axios';
import { opaqueType } from '@babel/types';


class AgregarReclamoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Datos para nuevo reclamo
            numeroReclamo: '',
            descripcion: '',
            ubicacion: '',
            pisoYNumero:'',
            radioopt: '',
            imagenes:[],
            archivos:{},
            authImgur: {'Authorization' : 'Client-ID b01d63b19d0a499'},
            urlimagenprueba:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.agregarReclamo = this.agregarReclamo.bind(this);
        this.agregarImagenes =this.agregarImagenes.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.agregarReclamo( () => {
        if(this.state.archivos.length>0) {
            console.log('Entra')
            this.agregarImagenes(this.state.numeroReclamo)
        }});
       
    }
    agregarReclamo(callback) {
        let url= 'http://localhost:8080/apiRest/agregarReclamo?codigo='+this.props.edificio.codigo+this.state.pisoYNumero+'&ubicacion='+this.state.ubicacion+'&documento='+encodeURIComponent(this.props.usuario)+'&descripcion='+encodeURIComponent(this.state.descripcion)
        console.log(url)
         axios.post(url).then(response =>{
            this.setState({
                numeroReclamo:response.data.nroreclamo
            })
         })
         callback();

        
    }
    agregarImagenes(nroreclamo){
        for(var i = 0; i < this.state.archivos.length; i++){
        /* Lets build a FormData object*/
        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", this.state.archivos.item(i)); // Append the file
        axios.post('https://api.imgur.com/3/image', fd, {
            headers: {
                 'Content-Type': 'multipart/form-data',
                 'Authorization' : 'Client-ID b01d63b19d0a499'
             }
    }).then(response =>
        {
            console.log(this.state.numeroReclamo)
            let urlimg=response.data.data.link
            let url='http://localhost:8080/apiRest/agregarImagenReclamo?nroreclamo='+this.state.numeroReclamo+'&id='+encodeURIComponent(urlimg)
            axios.post(url)
        });
  
    }
}     

        
    
    componentDidMount(){
        {/*console.log(axios.get('https://api.imgur.com/3/image/unLTBct', {headers : {Authorization: 'Client-ID b01d63b19d0a499' } }).then(response =>{
                    return response.data.data.link
                }))*/}
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.type === 'file' ? target.files : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    
    render() {
        let unidadesinq = (
            this.props.edificio.inquilinoEn.map(opt => {return (<option value={'&piso='+opt.piso+'&numero='+opt.numero}>Piso {opt.piso} - Numero {opt.numero}</option>)}
        )
        );
        let unidadesdue = (
            this.props.edificio.duenioEn.map(opt => {return (!opt.habitado ? <option value={'&piso='+opt.piso+'&numero='+opt.numero}>Piso {opt.piso} - Numero {opt.numero}</option> : <div/>)}
        )
        );


        return (
            <div class="container-fluid m-1 bg-info rounded pt-2 pb-3">
                <h3>Agrega un nuevo reclamo</h3>
                <div class="form-group">
                    <form onSubmit={
                            this.handleSubmit}>
                        <div class="row align-items-center my-1">
                            <div class="column col-1" />
                            <div class="column col-4">
                                <label> Edificio: </label>
                                <input readOnly class="form-control-plaintext" name="edificio" value={this.props.edificio.nombre}>
                                </input>
                            </div>
                            <div class="column col-1" />
                            <div class="column col-4">
                                <label> Ubicación </label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="inlineRadio1" name="radioopt" value="miunidad" onChange={this.handleInputChange} />
                                    <label class="form-check-label" htmlFor="inlineRadio1">Mi unidad</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="inlineRadio2" name="radioopt" value="comun" onChange={this.handleInputChange} />
                                    <label class="form-check-label" htmlFor="inlineRadio2">Espacio Común</label>
                                </div>
                            </div>
                            <div class="column col-1" />
                        </div>
                        <div class="row align-items-center my-1" >
                            <div class="column col-1" />
                            <div class="column col-10">
                                <label> Descripción:  </label>
                                <textarea class="form-control" name="descripcion" rows="3" onChange={this.handleInputChange} />
                            </div>
                            <div class="column col-1"></div>
                        </div>
                        <div class="row align-items-center my-1">
                            <div class="column col-1"></div>
                            <div className="column col-10">
                                <label htmlFor="inputGroupFile01">Añadir imágenes (opcional)</label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        name="archivos"
                                        multiple
                                        onChange={this.handleInputChange}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Seleccione un archivo
                                    </label>

                                </div>
                            </div>
                            <div class="column col-1"></div>
                        </div>
                        <div class="row align-items-end my-1 " >
                            <div class="column col-1"></div>
                            {this.state.radioopt === "comun" ?
                                (<div class="column col-3">
                                    <label>  Lugar: </label>
                                    <select class="form-control" name="ubicacion" onChange={this.handleInputChange}>
                                        <option>Seleccione...</option>
                                        <option value="SUM">SUM</option>
                                        <option value="Lobby">Lobby</option>
                                        <option value="Ascensor">Ascensor</option>
                                        <option value="Pallier">Pallier</option>
                                        <option value="Lavanderia">Lavandería</option>
                                        <option value="Piscina">Piscina</option>
                                        <option value="Cocheras">Cocheras</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>) : this.state.radioopt === "miunidad" ? (<div class="column col-3">
                                    <label>  Unidad: </label>
                                    <select class="form-control" name="pisoYNumero" onChange={this.handleInputChange}>
                                        <option>Seleccione...</option>
                                        {unidadesinq}
                                        {unidadesdue}
                                    </select>
                                </div>) : (<div class="column col-3">
                                    <label>Selecciona una ubicación primero</label>
                                    <select class="form-control" disabled></select>
                                </div>)}
                        </div>
                        <div class="row my-1">
                            <div class="col-3 offset-9">
                                <button class="btn btn-primary" type="submit">Enviar reclamo</button>
                            </div>
                        </div>
                        {this.state.numeroReclamo===""? <div></div> : (<div class="row my-1 justify-content-center">
                                                                <h3>Reclamo agregado con el numero #{this.state.numeroReclamo}</h3>
                                                            </div>)}





                    </form>
                </div>
            </div>

        );
    }
}
export default AgregarReclamoModal;