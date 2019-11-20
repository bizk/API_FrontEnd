import React from 'react';

class SideBar extends React.Component {
    constructor(props){
       super(props);
       this.state = {
           usuario : this.props.usr,
           edificiosUsuarioDuenio :  [],
           edificiosUsuarioInquilino : []
       }
    }

    componentDidMount(){
        fetch('')//Link a todos los edificios disponibles para el usuario
    }
    render() {
      return (
              <div class="col-2 hidden-md-down bg-dark">
          <ul class="list-group d-flex ">
            <sideBarItem ></sideBarItem>
            <a href="#" class="list-group-item active bg-secondary text-white">Edificios</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark text-white">Edificio1</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark text-white">Edificio2</a>
          </ul>
          </div>
      );
    }
  } export default SideBar