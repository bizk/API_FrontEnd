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
    const param = {codigo: this.state.edificio}
    axios.post("http://localhost:8080/API_ApiRest/getUnidadesPorEdificio", {param}).then(response => {
      //Array
      const newUnidades = response.data.map(c => {
        console.log(c);
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
  fetchUnidad(e){
    axios.get("http://localhost:3001/unidades").then(response => {
      //Array
      let newUnidades = response.data.map(c => {
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

  genericPutFetch3Param(url){
    const params = {
      edificio: this.props.edificio,
      piso: this.state.piso,
      numero: this.state.numero,
      dni: this.state.dni,
    }
    axios.post(url, {params}).catch(error=> console.log(error));
  }

  handleSubmitDuenios(event) {
    alert(this.state.piso + " " + this.state.numero + " " + this.state.dni)
    //Aca se llama al fetch de esa unidad y el fetch de los usuarios
    event.preventDefault()
  }
  handleSubmitInquilinos(event) {
    alert("fetch inquilinos");
    event.preventDefault();
  }
  handleSubmitTransUnidad(event) {
    this.genericPutFetch3Param("http://localhost:8080/API_ApiRest/transferirUnidad")
    event.preventDefault();
  }
  handleSubmitAddDuenio(event) {
    this.genericPutFetch3Param("http://localhost:3001/");
    event.preventDefault();
  }
  handleSubmitAlquilar(event) {
    this.genericPutFetch3Param("http://localhost:3001/");
    event.preventDefault();
  }
  handleSubmitAddInquilino(event) {
    this.genericPutFetch3Param("http://localhost:3001/");
    event.preventDefault();
  }
  handleSubmitLiberar(event) {
    this.genericPutFetch3Param("http://localhost:3001/");
    event.preventDefault();
  }
  handleSubmitHabitar(event) {
    this.genericPutFetch3Param("http://localhost:3001/");
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
            <div class="form-grup col-md-3">
              <button type="submitDueños" class="btn btn-info btn-block"
                onClick={this.handleSubmitDuenios.bind(this)}>Ver dueños</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitInquilinos" class="btn btn-info btn-block" onClick={this.handleSubmitInquilinos.bind(this)}>Ver inquilinos</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitTransferir" class="btn btn-primary btn-block" onClick={this.handleSubmitTransUnidad.bind(this)}>Transferir unidad</button>
            </div>
            <div class="form-grup col-md-3">
              <button type="submitAgregarDuenio" class="btn btn-primary btn-block" onClick={this.handleSubmitAddDuenio.bind(this)}>Agregar Duenio</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitAlquilar" class="btn btn-primary btn-block" onClick={this.handleSubmitAlquilar.bind(this)}>Alquilar</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitAgregarInquilino" class="btn btn-primary btn-block " onClick={this.handleSubmitAddInquilino.bind(this)}>Agregar Inquilino</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitLiberar" class="btn btn-primary btn-block" onClick={this.handleSubmitLiberar.bind(this)}>Liberar</button>
            </div>
            <div class="form-grup col-md-3 mt-2">
              <button type="submitHabitar" class="btn btn-primary btn-block" onClick={this.handleSubmitHabitar.bind(this)}>Habitar</button>
            </div>
          </div>
        </div>
        <UnidadList unidades={this.state.unidades}/>
      </div>
    );
  }
}
