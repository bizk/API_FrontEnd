import React from "react";

import axios from "axios";
import UnidadList from "./UnidadList";

export default class UnidadesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      unidades: [],
      edificio:props.edificio,
      piso:"",
      numero:"",
      dni:""
    }
  }


  componentDidMount() {
    this.fetchUnidades();
  }

  fetchUnidades(e){
    const params = {codigo: this.state.edificio}
    axios.get("http://localhost:8080/apiRest/getUnidadesPorEdificio", {params}).then(response => {
      //Array
      let newUnidades = response.data.map(c => {
        return {
          id: c.id,
          identificador: c.identificador,
          piso: c.piso,
          numero: c.numero,
          habitado: c.habitado,
          edificio: c.edificio
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

  genericPutFetch3Param(url){
    const params = {
      codigo: this.state.edificio,
      piso: this.state.piso,
      numero: this.state.numero,
      documento: this.state.dni,
    }
    axios.post(url, null, {params}).then(res => console.log(res)).catch(error=> console.log(error));
  }
  genericGetFetch3Param(url){
    //const param = {codigo: this.state.edificio}
    const params = {
      codigo: this.state.edificio,
      piso: this.state.piso,
      numero: this.state.numero,
      documento: this.state.dni,
    }
    axios.get(url, {params}).then(response => {
      //Array
      const newUnidades = response.data.map(c => {
        return {
          id: c.id,
          piso: c.piso,
          numero: c.numero,
          habitado: c.habitado,
          edificio: c.edificio
        };
      });

      //Create a new state object
      let newState = Object.assign({}, this.state, {
        unidades: newUnidades
      });

      this.setState(newState);
    }).catch(error=> console.log(error));
  }

  handleGetDuenios(event) {
    this.genericGetFetch3Param("http://localhost:8080/apiRest/dueniosPorUnidad");
    event.preventDefault();
  }
  handleGetInquilinos(event) {
    this.genericGetFetch3Param("http://localhost:8080/apiRest/inquilinosPorUnidad");
    event.preventDefault();
  }
  handleSubmitTransUnidad(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/transferirUnidad")
    event.preventDefault();
  }
  handleSubmitAddDuenio(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/agregarDuenioUnidad");
    event.preventDefault();
  }
  handleSubmitAlquilar(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/alquilarUnidad");
    event.preventDefault();
  }
  handleSubmitAddInquilino(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/agregarInquilinoUnidad");
    event.preventDefault();
  }
  handleSubmitLiberar(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/liberarUnidad");
    event.preventDefault();
  }
  handleSubmitHabitar(event) {
    this.genericPutFetch3Param("http://localhost:8080/apiRest/habitarUnidad");
    event.preventDefault();
  }

  render() {
    return (
      <div ref={this.edifRef}>
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
            <div class="form-grup col-md-4 mt-2">
              <button type="submitTransferir" class="btn btn-primary btn-block" onClick={this.handleSubmitTransUnidad.bind(this)}>Transferir unidad</button>
            </div>
            <div class="form-grup col-md-4 mt-2">
              <button type="submitAgregarDuenio" class="btn btn-primary btn-block" onClick={this.handleSubmitAddDuenio.bind(this)}>Agregar Duenio</button>
            </div>
            <div class="form-grup col-md-4 mt-2">
              <button type="submitAlquilar" class="btn btn-primary btn-block" onClick={this.handleSubmitAlquilar.bind(this)}>Alquilar</button>
            </div>
            <div class="form-grup col-md-4 mt-2">
              <button type="submitAgregarInquilino" class="btn btn-primary btn-block " onClick={this.handleSubmitAddInquilino.bind(this)}>Agregar Inquilino</button>
            </div>
            <div class="form-grup col-md-4 mt-2">
              <button type="submitLiberar" class="btn btn-primary btn-block" onClick={this.handleSubmitLiberar.bind(this)}>Liberar</button>
            </div>
            <div class="form-grup col-md-4 mt-2">
              <button type="submitHabitar" class="btn btn-primary btn-block" onClick={this.handleSubmitHabitar.bind(this)}>Habitar</button>
            </div>
          </div>
        </div>
        <UnidadList unidades={this.state.unidades}/>
      </div>
    );
  }
}
