import React from 'react';
import EdificioSideTab from './EdificioSideTab';
import axios from "axios";
class SideBar extends React.Component {
    constructor(props){
       super(props);
       this.state = {
          edificios: [],
           usuario : this.props.usr,
           edificiosUsuarioDuenio :  [],
           edificiosUsuarioInquilino : []
       };
    }

    async componentDidMount(){
      this.fetchEdificios();
    }

    fetchEdificios(e) {
      axios.get("http://localhost:8080/API_ApiRest/getEdificios").then(response => {
        //Array
        const newEdificios = response.data.map(c => {
          return {
            id: c.codigo,
            direccion: c.direccion,
            nombre: c.nombre,
          };
        });

        //Create a new state object
        let newState = Object.assign({}, this.state, {
          edificios: newEdificios,
        });

        this.setState(newState);
      }).catch(error=> console.log(error));
    }

    handleChildClick(argmnt) {
      var handleEdifSideBarChange = this.props.handleEdifSideBarChange;
      handleEdifSideBarChange(argmnt)
    }

    render() {
      return (
        <div class="col-2 hidden-md-down bg-dark">
          {this.state.edificios.map(c=><EdificioSideTab handleChildClick={this.handleChildClick.bind(this)} key={c.id}
                nombre={c.nombre} direccion={c.direccion} id={c.id} edificio={this.props.edificio}/>)}
        </div>
      );
    }
  } export default SideBar
