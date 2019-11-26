import React from 'react';
import AgregarReclamoModal from "./AgregarReclamoModal";
import ReclamoList from "./ReclamoList"
import axios from "axios";
import { isNullOrUndefined } from 'util';

export default class ReclamoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reclamos: [],
            //Datos heredados -- A leer directamente del props.
            usuarioActivo: "CI 13230978",
            //Estados
            isOpenAgregarReclamoModal: false
        }


    }
    componentWillMount() {
        this.fetchReclamos();

    }

    fetchReclamos(url) {
        console.log(url)
        axios.get(url).then(response => {
            if(!Array.isArray(response.data)){
                let newReclamo = {
              
                        idReclamo: response.data.numero,
                        descripcion: response.data.descripcion,
                        ubicacion: response.data.ubicacion,
                        estado: response.data.estado,
                        usuario: response.data.usuario, //persona
                        edificio: response.data.edificio, //edificio
                        unidad: response.data.unidad, // unidad
                        imagenes: response.data.imagenes
                    }
               ;
                this.setState(state => ({
                    reclamos: newReclamo
                }))
            }else{
            //Array
            console.log(response.data)
            let newReclamos = response.data.map(c => {
                return {
                    idReclamo: c.numero,
                    descripcion: c.descripcion,
                    ubicacion: c.ubicacion,
                    estado: c.estado,
                    usuario: c.usuario, //persona
                    edificio: c.edificio, //edificio
                    unidad: c.unidad, // unidad
                    imagenes:c.imagenes
                };
            });
            this.setState(state => ({
                reclamos: newReclamos
            }))
        }
        })

    }
    handleMisReclamos(){
        let url = "http://localhost:8080/apiRest/reclamosPorPersona?documento="+this.state.usuarioActivo
        this.fetchReclamos(url)
    }
    handleReclamosMisEdificios(){
        if (this.props.edificio.codigo== null){
            alert("No ha seleccionado ningún edificio!")
        } else{
        let url = "http://localhost:8080/apiRest/reclamosPorEdificio?codigo=" + this.props.edificio.codigo
        this.fetchReclamos(url)
        }
    }
    handleReclamoPorNumero(){
        let nroreclamo = prompt("Ingrese numero de reclamo", "1002")
        let url = "http://localhost:8080/apiRest/reclamosPorNumero?numero="+nroreclamo
        this.fetchReclamos(url)
    }


    toggleAgregarReclamoModal() {
        this.setState(state => ({
            isOpenAgregarReclamoModal: !this.state.isOpenAgregarReclamoModal
        }));
    }
    render() {
        let form;
        if (this.state.isOpenAgregarReclamoModal) {
            form = (<div>
                <AgregarReclamoModal edificio={this.props.edificio} usuario ={this.state.usuarioActivo /*TODO cambiar cuando se termine login*/}/> 
                <button type="button" class="btn btn-warning" onClick={this.toggleAgregarReclamoModal.bind(this)}>Cancelar</button>
            </div>)
        
        };
        
        return (
            <div class="mt-2">
                <div class="btn-group btn-group-toggle col-12">
                    <button type="button" class="btn btn-secondary" onClick={this.handleMisReclamos.bind(this)}>Mis reclamos</button>
                    <button type="button" class="btn btn-secondary" onClick={this.handleReclamosMisEdificios.bind(this)}>Reclamos en este edificio</button>
                    <button type="button" class="btn btn-secondary" onClick={this.handleReclamoPorNumero.bind(this)}>Buscar reclamo por numero</button>
                    <button type="button" class="btn btn-primary" onClick={this.toggleAgregarReclamoModal.bind(this)}>Agregar reclamo en éste edificio</button>
                </div>
                {form}
                <ReclamoList reclamos={this.state.reclamos}></ReclamoList>
        
            </div>

        );
    };
}
