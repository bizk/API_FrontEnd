import React from 'react';
import EdificioSideTab from './EdificioSideTab';
import axios from "axios";
class SideBar extends React.Component {
    constructor(props){
       super(props);
       this.state = {
          edificios: [],
          edifId:1,
           usuario : this.props.usr,
           edificiosUsuarioDuenio :  [],
           edificiosUsuarioInquilino : []
       }
    }

    componentDidMount(){
      this.fetchEdificios();
    }

    fetchEdificios(e) {
      axios.get("http://localhost:3001/edificios").then(response => {
        //Array
        const newEdificios = response.data.map(c => {
          return {
            id: c.id,
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

    handleChildClick(event) {
      this.setState({
        edifId: this.props.edifId
      })
      alert(this.state.edifId)
    }
    render() {
      return (
        <div class="col-2 hidden-md-down bg-dark">
          {this.state.edifId}
          {this.state.edificios.map(c=><EdificioSideTab inputFct={this.handleChildClick.bind(this)} key={c.id} 
                nombre={c.nombre} direccion={c.direccion}/>)}
        </div>
      );
    }
  } export default SideBar