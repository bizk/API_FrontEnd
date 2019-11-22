import React from "react";


export class ReclamoTab extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      reclamo: props.reclamo,
    }
  }

 render () {
   return (
      <div class=" m-1 d-flex p-1 bg-secondary rounded ">
        <div class="col-10 barra_texto">
          <p class="h4 card-title">Reclamo #{this.props.reclamo.idReclamo}</p>
          <p class="h5">Descripcion</p>
          <p class="barra_texto">{this.props.reclamo.descripcion}</p>
          <p class="h5">Ubicacion</p>
          <p class="barra_texto">Edificio: {this.props.reclamo.edificio.nombre}</p>
          <p class="barra_texto">Unidad: {this.props.reclamo.unidad.piso}-{this.props.reclamo.unidad.numero}</p>
          <p class="barra_texto">En: {this.props.reclamo.ubicacion}</p>
          <p class="h5">Reclamante: {this.props.reclamo.usuario.nombre}</p>
        </div>
        <div class="col-2 container allingn-v-center imagen">
          <img src="https://placekitten.com/128/128" class="img-responsive rounded barra"></img>
        </div>
      </div>
  )
  ;}
}

export default ReclamoTab