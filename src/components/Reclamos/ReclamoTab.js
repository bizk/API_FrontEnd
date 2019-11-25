import React from 'react';
import { Button } from 'react-bootstrap';
import ImagenesPorReclamo from './ImagenesPorReclamo'

export class ReclamoTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reclamo: props.reclamo,
    }
  }

  render() {
    return (
      <div class="m-1 flex px-4 pt-2 bg-secondary rounded ">
        <div class="row">
          <div class="col-6 column">
            <div class="row">
              <h4 class="card-title">Reclamo #{this.props.reclamo.idReclamo}</h4> <small>{this.props.reclamo.estado}</small>
            </div>
            <div class="row">
              <p class="h5">Descripcion</p>
            </div>
            <div class="row">
              <p class="barra_texto">{this.props.reclamo.descripcion}</p>
            </div>
            <div class="row">
              <p class="h5">Reclamante: {this.props.reclamo.usuario.nombre}</p>
            </div>
          </div>
          <div class="col-6 px-2 column">
            <div class="row">
              <p class="h5">Ubicacion</p>
            </div>
            <div class="row">
              <p class="barra_texto">Edificio: {this.props.reclamo.edificio.nombre}</p>
            </div>
            <div class="row">
              <p class="barra_texto">Unidad: {this.props.reclamo.unidad.piso}-{this.props.reclamo.unidad.numero}</p>
            </div>
            <div class="row">
              <p class="barra_texto">En: {this.props.reclamo.ubicacion}</p>
            </div>
          </div>
        </div>
        
     <div class="row p-2">
          {/*<img src="https://placekitten.com/128/128" class="img-responsive rounded barra"></img>*/}
          <ImagenesPorReclamo imagenes={this.props.reclamo.imagenes}></ImagenesPorReclamo>
        </div>
      </div>
    )
      ;
  }
}

export default ReclamoTab