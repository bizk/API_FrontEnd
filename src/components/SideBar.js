import React from 'react';
import EdificioSideTab from './EdificioSideTab';
import axios from "axios";
class SideBar extends React.Component {
    constructor(props){
       super(props);
       this.state = {
          edificios: this.props.edificios,
           usuario : this.props.usr,
           edificiosUsuarioDuenio :  [],
           edificiosUsuarioInquilino : []
       };
    }



  

    handleChildClick(argmnt) {
      var handleEdifSideBarChange = this.props.handleEdifSideBarChange;
      handleEdifSideBarChange(argmnt)
    }

    render() {
      return (
        <div class="col-2 hidden-md-down bg-dark">
          {this.props.edificios.map(c=><EdificioSideTab handleChildClick={this.handleChildClick.bind(this)} key={c.id}
                edif={c}/>)}
        </div>
      );
    }
  } export default SideBar
