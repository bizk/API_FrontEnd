import React from 'react';
import axios from 'axios';


class AgregarReclamoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Datos para nuevo reclamo
            numeroReclamo: '',
            descripcion: '',
            ubicacion: '',
            documento: '',
            codigo: '',
            piso: '',
            numeroUnidad: '',


        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.opcionesEdificio = this.opcionesEdificio.bind(this);
    }

    handleSubmit(event) {
        alert('Un reclamo fue enviado: ' + this.state.descripcion + this.state.ubicacion);
        event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    componentDidMount(){
        
    }
     opcionesEdificio(){
        /*TO DO: validar que solo muestre edificios que el user esté habilitado
            Opciones: Cambiar el endpoint o agregarlos al estado del componente*/
        let edificios = axios.get("http://localhost:8080/apiRest/getEdificios").then(response => 
        response.data.map(item => {
           return <option value={item.codigo}>{item.nombre}</option>
        }));
        console.log(edificios);
       

    } 

    render() {
      /*  let edificios = axios.get("http://localhost:8080/apiRest/getEdificios").then(response => 
        response.data.map(item => {
            return (
              <option value={item.codigo}>{item.nombre}</option>
            )}));
        console.log(edificios)*/
            let edificios = this.opcionesEdificio;
        
        return (
            <div class="container-fluid m-1 bg-info rounded">
                <h3>Agrega un nuevo reclamo</h3>
                <div class="form-group">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="column col-1" />
                            <div class="column col-4">
                                <label> Edificio: </label>
                               {/* <SelectDinamico name="codigo"> </SelectDinamico> */}
                                <select class="form-control" name="codigo">
                                {edificios}
                                </select>
                            </div>
                            <div class="column col-3">
                                <label> Piso:</label>
                                <select class="form-control" name="piso"> </select>
                            </div>
                            <div class="column col-3">
                                <label> Numero:</label>
                                <select class="form-control" name="numero"> </select>
                            </div>
                            <div class="column col-1" />
                        </div>
                        <div class="row" >
                            <div class="column col-1" />
                            <div class="column col-10">
                                <label> Descripción:  </label>
                                <textarea class="form-control" name="descripcion" rows="3" onChange={this.handleInputChange} />
                            </div>
                            <div class="column col-1"></div>
                        </div>
                        <div class="row" >
                            <div class="column col-1"></div>
                            <div class="column col-3">
                                <label>  Ubicacion: </label>
                                <select class="form-control" name="ubicacion" onChange={this.handleInputChange}>
                                    <option value="SUM">SUM</option>
                                    <option value="Lobby">Lobby</option>
                                    <option value="Ascensor">Ascensor</option>
                                    <option value="Pallier">Pallier</option>
                                    <option value="Cocina">Cocina</option>
                                    <option value="Banio">Baño</option>
                                    <option value="Habitacion">Habitacion</option>
                                </select>
                            </div>
                        </div>



                        <button type="submit">Enviar reclamo</button>

                    </form>
                </div>
            </div>

        );
    }
}
export default AgregarReclamoModal;