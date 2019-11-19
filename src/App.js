import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

import AgregarReclamoModal from "./components/AgregarReclamoModal";

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import UsuarioList from "./components/UsuarioList";
import UnidadList from "./components/UnidadList";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      tab: "personasTab",
      unidades: [],
      personas: [],
      isUnidades: false,
      isReclamos: false,
      isPersonas: true,

      isOpenAgregarReclamoModal: true
    };
    // this.handleClickReclamosTab = this.handleClickReclamosTab.bind(this);
  }

  //Fetching data after loading the page
  componentDidMount() {
    axios.get("http://localhost:3001/personas").then(response => {
      const newPersonas = response.data.map(c => {
        return{
          nombre: c.nombre,
          documento: c.documento
        };
      });

      let newState = Object.assign({},this.state, {
        personas: newPersonas
      })
      this.setState(newState)
    }).catch(error => console.log(error));

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

  };

  //Buttons handlers
  handleClickReclamosTab(e) {
    this.setState(state => ({ tab: "reclamosTab", isUnidades: false, isReclamos: true, isPersonas: false}));
  }
  handleClickUnidadesTab(e) {
    this.setState(state => ({ tab: "unidadesTab", isUnidades: true, isReclamos: false, isPersonas: false}));
  }
  handleClickPersonasTab(e) {
    this.setState(state => ({ tab: "personasTab", isUnidades: false, isReclamos: false, isPersonas: true}));
  }


  handleClickHabilitadosEdif(e){
    console.log("Habilitados por edificio")
  }
  handleClickDueniosEdif(e){
    console.log("Duenios por edificio")
  }
  handleClickHabitantesEdif(e){
    console.log("Habitantes por edificio")
  }

  toggleAgregarReclamoModal() {
    this.setState(state => ({
      isOpenAgregarReclamoModal: !this.state.isOpenAgregarReclamoModal
    }));
  }

  render() {
    const tabPosition = this.state.tab;
    let bodyContainer;

    //Dymamic generation of components inside the body container
    if (tabPosition === "reclamosTab") {
      bodyContainer =  <UnidadList unidades={this.state.unidades}/>;
    } else if (tabPosition === "personasTab") {
      bodyContainer = <div class="mt-2">
        <button type="button" class="btn btn-secondary" onClick={this.handleClickHabilitadosEdif.bind(this)}>Habilitados</button>
        <button type="button" class="btn btn-secondary" onClick={this.handleClickDueniosEdif.bind(this)}>Duenios</button>
        <button type="button" class="btn btn-secondary" onClick={this.handleClickHabitantesEdif.bind(this)}>Habitantes</button>
        <UsuarioList />
        {this.state.isOpenAgregarReclamoModal ?
          <AgregarReclamoModal />
          : null
        }
        <Button variant="info" onClick={this.toggleAgregarReclamoModal.bind(this)}>Agregar +</Button>
      </div>;
    } else {
      bodyContainer = <div> Error 404</div>;
    };

    return (
      <div>
          <header className="App-header">
            <Nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar App-header">
              <a class="navbar-brand" href="/"><strong>API</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class= "nav-item">
                      <button type="button" class={"btn " + (this.state.isUnidades ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickUnidadesTab.bind(this)}>Unidades</button>
                    </li>
                    <li class={"nav-item "}>
                      <button type="button" class={"btn " + (this.state.isPersonas ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickPersonasTab.bind(this)}>Personas</button>
                    </li>
                    <li class={"nav-item "}>
                      <button type="button" class={"btn " + (this.state.isReclamos ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickReclamosTab.bind(this)}>Reclamos</button>
                    </li>
                  </ul>
                 </div>
            </Nav>
          </header>
          <div class="container-fluid fill">
            <div class="row justify-content-center h-100">
              <div class="col-2 hidden-md-down bg-dark">
                <SideBar />
              </div>
              <div class="col-10 fill">
                {bodyContainer}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

class SideBar extends React.Component {
  render() {
    return (
        <ul class="list-group d-flex ">
          <a href="#" class="list-group-item active bg-secondary text-white">Edificios</a>
          <a href="#" class="list-group-item list-group-item-action bg-dark text-white">Edificio1</a>
          <a href="#" class="list-group-item list-group-item-action bg-dark text-white">Edificio2</a>
        </ul>
    );
  }
}
