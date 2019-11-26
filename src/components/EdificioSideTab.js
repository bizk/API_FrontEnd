import React from "react";

export default class EdificioSideTab extends React.Component {
    constructor(props){
        super();
     }


    render() {
        var handleChildClick = this.props.handleChildClick;
        return(
            <button type="button" onClick={()=>handleChildClick(this.props.edif)}
            class="btn btn-dark btn-block mt-2">
                <p class="font-weight-bold">{this.props.edif.nombre}</p>
                <p class="font-weight-light">{this.props.edif.direccion}</p>
            </button>
        );
    };
}
