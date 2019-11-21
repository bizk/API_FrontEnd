import React from "react";

import axios from "axios";

import UsuarioList from "./UsuarioList";

export default class UsuariosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personas: [],
    }
  }

  componentDidMount() {
    this.fetchAllPersonas();
  }

  fetchAllPersonas(e) {
    axios.get("http://localhost:3001/personas").then(response => {
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
  fetchHabilitados(e) {
    axios.get("http://localhost:3001/habilitados").then(response => {
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
  fetchDuenios(e) {
    axios.get("http://localhost:3001/duenios").then(response => {
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
  fetchHabitantes(e) {
    axios.get("http://localhost:3001/habitantes").then(response => {
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

  handleClickAllPersonas(e) {
    this.fetchAllPersonas();
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
          <button type="button" class="btn btn-secondary" onClick={this.handleClickAllPersonas.bind(this)}>Habilitados</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabilitadosEdif.bind(this)}>Habilitados</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickDueniosEdif.bind(this)}>Duenios</button>
          <button type="button" class="btn btn-secondary" onClick={this.handleClickHabitantesEdif.bind(this)}>Habitantes</button>
        </div>

        <UsuarioList personas={this.state.personas}/>
      </div>
    );
  }

}
