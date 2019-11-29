import React from "react";

import axios from "axios";

import UsuarioList from "./UsuarioList";

export default class UsuariosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personas: [],
      edificio: props.edificio,
    }
  }

  componentDidMount() {
    this.fetchHabitantes();
  }

  genericGetFetch3Param(url){
    console.log(this.state.edificio);
    axios.get(url+"?codigo="+this.state.edificio).then(response => {
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

  fetchHabilitados(e) {this.genericGetFetch3Param("http://localhost:8080/API_ApiRest/habilitadosPorEdificio");}
  fetchHabitantes(e) {this.genericGetFetch3Param("http://localhost:8080/API_ApiRest/habitantesPorEdificio");}
  fetchDuenios(e) {this.genericGetFetch3Param("http://localhost:8080/API_ApiRest/dueniosPorEdificio");}

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

  render() {
    return (
      <div class="mt-2">
        <div class="btn-group btm-group-toggle col-12">
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabitantes.bind(this)}>Habitantes</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabilitadosEdif.bind(this)}>Habilitados</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickDueniosEdif.bind(this)}>Duenios</button>
        </div>
        <UsuarioList personas={this.state.personas}/>
      </div>
    );
  }

}
