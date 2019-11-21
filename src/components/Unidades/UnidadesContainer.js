import React from "react";

import axios from "axios";
import UnidadList from "./UnidadList";

export default class UnidadesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      unidades: [],
      piso:"",
      numero:"",
      dni:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.fetchUnidades();
  }

  fetchUnidades(e){
    axios.get("http://localhost:3001/unidades").then(response => {
      //Array
      const newUnidades = response.data.map(c => {
        return {
          identificador: c.identificador,
          piso: c.piso,
          numero: c.numero,
          habitado: c.habitado,
          codigoEdificio: c.codigoEdificio
        };
      });

      //Create a new state object
      let newState = Object.assign({}, this.state, {
        unidades: newUnidades
      });

      this.setState(newState);
    }).catch(error=> console.log(error));
  }

  handleChangePiso(event){
    this.setState({piso: event.target.value})
  }
  handleChangeNumero(event){
    this.setState({numero: event.target.value})
  }
  handleChangeDni(event){
    this.setState({dni: event.target.value})
  }

  handleSubmit(event) {
    alert(this.state.piso + " " + this.state.numero + " " + this.state.dni)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div clas="card">
          <div class="card-header mt-2">Herramientas</div>
          <div class="form-row card-body">
            <div class="form-group col-md-4">
              <label for="imputPiso ">Piso</label>
              <input type="text"
                     class="form-control"
                     value={this.state.piso}
                     onChange={this.handleChangePiso.bind(this)}
                     placeholder="Piso" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputNumero">Numero</label>
              <input type="text"
                  class="form-control"
                  value={this.state.numero}
                  onChange={this.handleChangeNumero.bind(this)}
                  name="inputNumero"
                  placeholder="Numero" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputDni">DNI</label>
              <input type="dni"
                  class="form-control"
                  value={this.state.dni}
                  onChange={this.handleChangeDni.bind(this)}
                  name="inputDni"
                  placeholder="DNI" />
            </div>
            <div class="form-grup col-md-3">
              <button type="submitDueños" class="btn btn-info btn-block"
                onClick={this.handleSubmit}>Ver dueños</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitInquilinos" class="btn btn-info btn-block ">Ver inquilinos</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitTransferir" class="btn btn-primary btn-block ">Transferir unidad</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitAgregarDuenio" class="btn btn-primary btn-block ">Agregar Duenio</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitAlquilar" class="btn btn-primary btn-block ">Alquilar</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitAgregarInquilino" class="btn btn-primary btn-block ">Agregar Inquilino</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitLiberar" class="btn btn-primary btn-block ">Liberar</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitHabitar" class="btn btn-primary btn-block ">Habitar</button>
            </div>
          </div>
        </div>
        <UnidadList unidades={this.state.unidades}/>
      </div>
    );
  }
}
