import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import SideBar from './components/SideBar.js'

import axios from "axios";

// import UnidadTab from './Components.js';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import UnidadList from "./components/UnidadList";
import ReclamoList from "./components/ReclamoList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      usr : this.props.usr,
      posts: []}
 }

 componentDidMount() {
  fetch('http://localhost:8080/apiRest/reclamosPorEdificio?codigo=1')
  .then((res) => res.json()).then((json) => {
     this.setState({
     posts: json,
    });

  }).catch((error) =>{
    alert("Error en API" + error);
  });
}

    //Array
      // const newPosts = response.data.map(p => {
      //   return {
      //     numero: p.numero,
      //     usuario: p.usuario,
      //     ubicacion: p.ubicacion,
      //     descripcion:p.descripcion,
      //     unidad: p.unidad,
      //     estado:p.estado,
      //     imagenes: p.imagenes
      //   };
   

      // //Create a new state object
      // const newState = Object.assign({}, this.state, {
      //   posts: newPosts()
      // });

     
 

  render() {
    return (
      <html className="">
         <Header></Header>
          <div class="container-fluid fill">
            <div class="row justify-content-center h-100">
              <SideBar usr={this.state.usr} />

              <div class="col-10 ">
                <ReclamoList posts = {this.state.posts}/>
              </div>
            </div>
          </div>
      </html>
    );
  }
}

export default App;


