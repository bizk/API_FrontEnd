import React from "react";

import axios from "axios";

import UsuarioList from "./UsuarioList";

export default class UsuariosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personas: [],
      edificio: props.edificio,
      piso: "",
      numero: "",
      fakePersona_dni: "",
      fakePersona_nombre: ""
      }
    }

  componentDidMount() {
    this.fetchHabitantes();
  }

  genericGetFetch2Param(url){
    const params = {
      codigo: this.state.edificio,
      piso: this.state.piso,
      numero: this.state.numero,
    };
    axios.get(url, {params}).then(response => {
      //Array
      let newPersonas = response.data.map(c => {
        return {
          id: c.id,
          documento: c.documento,
          nombre: c.nombre,
        };
      });

      //Create a new state object
      let newState = Object.assign({}, this.state, {
        personas: newPersonas
      });

      this.setState(newState);
    }).catch(error=> console.log(error));
  }

  genericGetFetchParam(url){
    const params = {codigo: this.state.edificio}
    axios.get(url, {params}).then(response => {
      //Array
      let newPersonas = response.data.map(c => {
        return {
          id: c.id,
          documento: c.documento,
          nombre: c.nombre,
        };
      });

      //Create a new state object
      let newState = Object.assign({}, this.state, {
        personas: newPersonas
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
  handleChangeFakePersonaDni(event){
    this.setState({fakePersona_dni : event.target.value});
    console.log(this.state.fakePersona_dni);
  }
  handleChangeFakePersonaName(event){
    this.setState({fakePersona_nombre :  event.target.value});
    console.log(this.state.fakePersona_nombre);
  }

  handleGetDuenios(event) {
    this.genericGetFetch2Param("http://localhost:8080/apiRest/dueniosPorUnidad");
    event.preventDefault();
  }
  handleGetInquilinos(event) {
    this.genericGetFetch2Param("http://localhost:8080/apiRest/inquilinosPorUnidad");
    event.preventDefault();
  }

  fetchHabilitados(e) {this.genericGetFetchParam("http://localhost:8080/apiRest/habilitadosPorEdificio");}
  fetchHabitantes(e) {this.genericGetFetchParam("http://localhost:8080/apiRest/habitantesPorEdificio");}
  fetchDuenios(e) {this.genericGetFetchParam("http://localhost:8080/apiRest/dueniosPorEdificio");}

  handleClickHabitantes(e) {
    this.fetchHabitantes();
  }
  handleClickHabilitadosEdif(e){
    this.fetchHabilitados();
  }
  handleClickDueniosEdif(e){
    this.fetchDuenios();
  }
  handleClickHabitantesEdif(e){
    this.fetchHabitantes();
  }
  handleAddPersona(e){
      const params = {
        documento: this.state.fakePersona_dni,
        nombre: this.state.fakePersona_nombre,
      }
      axios.post("http://localhost:8080/apiRest/agregarPersona", null, {params}).then(res => console.log(res)).catch(error=> console.log(error));
  }
  handleDeletePersona(e){
      const params = {
        documento: this.state.fakePersona_dni,
      }
      axios.post("http://localhost:8080/apiRest/eliminarPersona", null, {params}).then(res => console.log(res)).catch(error=> console.log(error));
  }

  render() {
    return (
      <div class="mt-2">
        <div class="btn-group btm-group-toggle col-12">
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabitantes.bind(this)}>Habitantes</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabilitadosEdif.bind(this)}>Habilitados</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickDueniosEdif.bind(this)}>Duenios</button>
        </div>
        <div clas="card">
          <div class="card-header mt-2">Herramientas</div>
          <div class="form-row card-body">
              <div class="form-group col-md-3">
                <label>Documento</label>
                <input type="text"
                       class="form-control"
                       value={this.state.fakePersona_dni}
                       onChange={this.handleChangeFakePersonaDni.bind(this)}
                       placeholder="Documento" />
              </div>
              <div class="form-group col-md-3">
                <label>Nombre</label>
                <input type="text"
                    class="form-control"
                    value={this.state.fakePersona_nombre}
                    onChange={this.handleChangeFakePersonaName.bind(this)}
                    name="inputNumero"
                    placeholder="Nombre" />
              </div>
              <div class="form-group col-md-3">
                <label></label>
                <button type="button" class="btn btn-info btn-block"
                  onClick={this.handleAddPersona.bind(this)}>Agregar</button>
              </div>
              <div class="form-group col-md-3">
                <label></label>
                <button type="button" class="btn btn-danger btn-block"
                  onClick={this.handleDeletePersona.bind(this)}>Eliminar </button>
              </div>
            </div>
          <div class="card-footer"/>
          <div class="form-row card-body">
            <div class="form-group col-md-6">
              <label for="imputPiso ">Piso</label>
              <input type="text"
                     class="form-control"
                     value={this.state.piso}
                     onChange={this.handleChangePiso.bind(this)}
                     placeholder="Piso" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputNumero">Numero</label>
              <input type="text"
                  class="form-control"
                  value={this.state.numero}
                  onChange={this.handleChangeNumero.bind(this)}
                  name="inputNumero"
                  placeholder="Numero" />
            </div>
            <div class="form-grup col-md-6">
              <button type="button" class="btn btn-primary btn-block"
                onClick={this.handleGetDuenios.bind(this)}>Ver dueños</button>
            </div>
            <div class="form-grup col-md-6">
              <button type="button" class="btn btn-primary btn-block"
                onClick={this.handleGetInquilinos.bind(this)}>Ver inquilinos</button>
            </div>
          </div>
          <div class="card-footer"/>

        </div>
        <UsuarioList personas={this.state.personas}/>
      </div>
    );
  }

}
