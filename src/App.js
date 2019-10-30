import React from 'react';
import logo from './logo.svg';
import './App.css';

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon, SideBar} from 'react-bootstrap';

function App() {
  return (
    <div>
    <header className="App-header">
      <Nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
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

    <div class="SideBar">
      <Nav class="sidebar-nav">
        <ul class="nav">
          <li class="nav-title">Edificios</li>
          <li class="nav-item">
            <a class="nav-item" href="#">
               <i class="nav-icon cui-speedometer"></i> Nav item
            </a>
          </li>
        </ul>
      </Nav>
    </div>

    <UnidadTab />
    <UnidadTab />
    <UnidadTab />
    <Button>GetEdificios</Button>
  </div>
  );
}

export default App;

class UnidadTab extends React.Component {
  render () {
      return (
          <div class="card alert-info">
            <div>
              <img src="https://placekitten.com/64/64" class="img-responsive rounded"></img>
            </div>
            <div class="card-body">
              <p class="h5 card-title">#ID</p>
              <p class="card-text text-muted">#NombreEdif</p>
              <p class="card-text text-muted">#Piso</p>
              <p class="card-text text-muted">#Numero</p>
              <p class="card-text text-muted">#Habilitado</p>
              <p class="card-text text-muted">Propiedad 1</p>
            </div>
          </div>
      );
  }
}