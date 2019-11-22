import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import SideBar from './components/SideBar.js'

import axios from "axios";

import AgregarReclamoModal from "./components/AgregarReclamoModal";

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import ReclamoList from "./components/ReclamoList";
import UsuariosContainer from "./components/Personas/UsuariosContainer";
import UnidadesContainer from "./components/Unidades/UnidadesContainer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      tab: "unidadesTab",
      unidades: [],
      personas: [],
      edif: "1",
      isUnidades: true,
      isReclamos: false,
      isPersonas: false,
      isOpenAgregarReclamoModal: true
    };
  }

  componentDidMount() {
    this.fetchPersonas();
  };

  fetchPersonas(e) {
    axios.get("http://localhost:3001/personas").then(response => {
      //Array
      const newPersonas = response.data.map(c => {
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

  toggleAgregarReclamoModal() {
    this.setState(state => ({
      isOpenAgregarReclamoModal: !this.state.isOpenAgregarReclamoModal
    }));
  }

  handleEdifSideBarChange(newEdif) {
    this.setState({ edif: newEdif });
  }

  render() {
    const tabPosition = this.state.tab;
    let bodyContainer;
    //Dymamic generation of components inside the body container
    if (tabPosition === "unidadesTab") {
      bodyContainer =  <UnidadesContainer edificio={this.state.edif}/>;
    } else if (tabPosition === "personasTab") {
      bodyContainer = <UsuariosContainer edificio={this.state.edif}/>;
    } else if (tabPosition === "reclamosTab") {
      bodyContainer = <div>
        {this.state.isOpenAgregarReclamoModal ?
          <AgregarReclamoModal />
          : null
        }
        <Button variant="info" onClick={this.toggleAgregarReclamoModal.bind(this)}>Agregar +</Button>
      </div>;
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

          <div class="container-fluid">
            <div class="row justify-content-center">
              <SideBar handleEdifSideBarChange={this.handleEdifSideBarChange.bind(this)} />
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
