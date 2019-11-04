import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import UnidadList from "./components/UnidadList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      tab: "unidadesTab",
      unidades: [],
      isUnidades: true,
      isReclamos: false,
    };  
    this.changeToReclamos = this.changeToReclamos(bind);
  }
  
  componentDidMount() {
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
      const newState = Object.assign({}, this.state, {
        unidades: newUnidades
      });

      this.setState(newState);
    }).catch(error=> console.log(error));
  };

  changeToReclamos(e) {
    const newState = Object.assign({}, this.state, {
      tab: "reclamosTab"
    });

    this.setState(newState);
  };

  render() {
    const tabPosition = this.state.tab;
    let bodyContainer;

    if (tabPosition === "kiwi") {
      bodyContainer = <p> HOLA MUNDO >:C</p>;
    } else if (tabPosition === "unidadesTab") {
      bodyContainer =  <UnidadList unidades={this.state.unidades}/>;
    } else {
      bodyContainer = <div> D:</div>;
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
                    <li class= {'nav-item ' + (this.state.isUnidades ? "active" : "")}>
                      <Button class="nav-link">Unidades</Button>
                    </li>
                    <li class={"nav-item " + (this.state.isReclamos ? "active" : "")}>
                      <Button class="nav-link" onClick={this.changeToReclamos}>Reclamos</Button>
                    </li>
                   </ul>
                   <ul class="navbar-nav nav-flex-icons">
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-twitter"></i></a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-instagram"></i></a>
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
              <div class="col-10 ">
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

