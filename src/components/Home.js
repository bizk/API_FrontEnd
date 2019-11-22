import React from 'react';
import './App.css';
import Header from './Header.js';
import ReclamoList from "./ReclamoList";
import SideBar from './SideBar.js';

class Home extends React.Component {
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

export default Home;
