import React from 'react';
import logo from './logo.svg';
import './components/App.css';
import Header from './components/Header.js'
import SideBar from './components/SideBar.js'

import axios from "axios";

import { Home, Users, MessageSquare } from "react-feather";

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import ReclamoContainer from "./components/Reclamos/ReclamoContainer";
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
      userName : props.userName,
      role: props.role
    };
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

  handleEdifSideBarChange(newEdif) {
    this.setState({ edif: {codigo: newEdif.id, nombre: newEdif.nombre, direccion: newEdif.direccion } });
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
      bodyContainer = <ReclamoContainer edificio={this.state.edif}></ReclamoContainer>
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
                    {this.state.role === "admin" ? (<li class= "nav-item">
                      <button type="button" class={"btn " + (this.state.isUnidades ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickUnidadesTab.bind(this)}><Home color="#FFFFFF" size="18" /> Unidades</button>
                    </li>) : <div/>}
                    {this.state.role === "admin" ? (<li class={"nav-item "}>
                      <button type="button" class={"btn " + (this.state.isPersonas ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickPersonasTab.bind(this)}><Users color="#FFFFFF" size="18"/> Personas</button>
                    </li>) : <div/>}
                    <li class={"nav-item "}>
                      <button type="button" class={"btn " + (this.state.isReclamos ? "btn-secondary" : "btn-dark")}
                              onClick={this.handleClickReclamosTab.bind(this)}>
                              <MessageSquare color="#FFFFFF" size="18"/> Reclamos</button>
                    </li>
                  </ul>
                 </div>
            </Nav>
          </header>

          <div class="container-fluid">
            <div class="row justify-content-center">
              { this.state.role==="admin" ? <SideBar handleEdifSideBarChange={this.handleEdifSideBarChange.bind(this)} /> : <div/>}
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
