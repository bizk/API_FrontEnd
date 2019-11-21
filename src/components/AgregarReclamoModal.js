import React from 'react';

class AgregarReclamoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: '',
            descripcion: '',
            ubicacion: '',

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div class="container-fluid bg-info">
                <h3>Agrega un nuevo reclamo</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Descripción:
          <textarea name="descripcion"  onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Ubicacion:
                    <select name="ubicacion" onChange={this.handleInputChange}>
                        <option value="SUM">SUM</option>
                        <option value="Lobby">Lobby</option>
                        <option value="Ascensor">Ascensor</option>
                        <option value="Pallier">Pallier</option>
                        <option value="Cocina">Cocina</option>
                        <option value="Banio">Baño</option>
                        <option value="Habitacion">Habitacion</option>
                    </select>
                    </label>
                    <input type="submit" value="Enviar Reclamo"/>
                </form>
            </div>
        );
    }
}
export default AgregarReclamoModal;