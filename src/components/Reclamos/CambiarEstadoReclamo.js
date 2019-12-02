import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
class CambiarEstadoBoton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            estado: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.type === 'file' ? target.files : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(e){
        e.preventDefault()
        let url = 'http://localhost:8080/apiRest/cambiarEstado?numero='+this.props.nroreclamo+' &estado='+this.state.estado
        axios.post(url)
        alert("El estado del reclamo cambió a "+this.state.estado)
    }

    render() {
        return (
            <div class="row">
            <form onSubmit={this.handleSubmit}>
                <div class="column col-3">
                    <label>  Cambiar Estado: </label>
                    <select class="form-control" name="estado" onChange={this.handleInputChange}>
                        <option value="abierto">Abierto</option>
                        <option value="enProceso">En proceso</option>
                        <option value="desestimado">Desestimado</option>
                        <option value="anulado">Anulado</option>
                        <option value="terminado">Terminado</option>
                    </select>
                </div>
                <div class="column col-3 offset-8">
                                <button class="btn btn-primary" type="submit">Actualizar</button>
                </div>
            </form>
            </div>
        )

    }
} export default CambiarEstadoBoton