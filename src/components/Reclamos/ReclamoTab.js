import React from 'react';
import ImagenesPorReclamo from './ImagenesPorReclamo';
import CambiarEstadoReclamo from './CambiarEstadoReclamo';


export class ReclamoTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reclamo: props.reclamo,
    }
  }

  render() {
    let ubic = (typeof this.props.reclamo.unidad !== 'undefined' ? (<div class="row">
    <p class="barra_texto">Unidad: {this.props.reclamo.unidad.piso}-{this.props.reclamo.unidad.numero}</p>
  </div>) :
  (<div class="row">
    <p class="barra_texto">En: {this.props.reclamo.ubicacion}</p>
  </div>))
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
            {ubic}
          </div>
        </div>
        
     <div class="row p-2">
          <ImagenesPorReclamo key={'img'+this.props.reclamo.idReclamo} nroreclamo={this.props.reclamo.idReclamo}></ImagenesPorReclamo>
        </div>
      {
        this.props.role === 'admin' ? (<div class="pb-2"> 
            <h4>Opciones de administrador</h4>
           <CambiarEstadoReclamo nroreclamo = {this.props.reclamo.idReclamo}></CambiarEstadoReclamo> 
        </div>):<div class="p-2"/>
      }
      </div>

    )
      ;
  }
}

export default ReclamoTab