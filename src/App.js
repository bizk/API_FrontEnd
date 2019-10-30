import React from 'react';
import logo from './logo.svg';
import './App.css';

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

function App() {
  return (
    <html classname="">
        <header className="App-header">
          <Nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar App-header">
            <a class="navbar-brand" href="#"><strong>API</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Actual<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Edificios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Informacion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Reclamos</a>
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
              <UnidadTab />
              <UnidadTab />
              <UnidadTab />
              <Button>GetEdificios</Button>
            </div>
          </div>
        </div>
    </html>
  );
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

class UnidadTab extends React.Component {
  render () {
      return (
          <div class="m-1 d-flex p-1 bg-secondary rounded ">
            <div class="barra_texto">
              <img src="https://placekitten.com/64/64" class="img-responsive rounded barra"></img>
            </div>
            <div class="barra_texto">
              <p class="h5 card-title">#ID</p>
              <p class="barra_texto">#NombreEdif</p>
              <p class="barra_texto">#Piso</p>
              <p class="barra_texto">#Numero</p>
              <p class="barra_texto">#Habilitado</p>
              <p class="barra_texto">Propiedad 1</p>
            </div>
          </div>
      );
  }
}
