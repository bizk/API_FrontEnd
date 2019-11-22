import React from 'react';


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
            numero: '',


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

    render() {
        return (
            <div class="container-fluid m-1 bg-info rounded">
                <h3>Agrega un nuevo reclamo</h3>
                <div class="form-group">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="column col-1" />
                            <div class="column col-4">
                                <label for="codigo"> Edificio: </label>
                                <select class="form-control" name="codigo">
                                    {this.opcionesEdificio}
                                </select>
                            </div>
                            <div class="column col-3">
                                <label for="piso"> Piso:</label>
                                <select class="form-control" name="piso"> </select>
                            </div>
                            <div class="column col-3">
                                <label for="numero"> Numero:</label>
                                <select class="form-control" name="numero"> </select>
                            </div>
                            <div class="column col-1" />
                        </div>
                        <div class="row" >
                            <div class="column col-1" />
                            <div class="column col-10">
                                <label for="descripcion"> Descripción:  </label>
                                <textarea class="form-control" name="descripcion" rows="3" onChange={this.handleInputChange} />
                            </div>
                            <div class="column col-1"></div>
                        </div>
                        <div class="row" >
                            <div class="column col-1"></div>
                            <div class="column col-3">
                                <label for="ubicacion">  Ubicacion: </label>
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