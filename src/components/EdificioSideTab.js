import React from "react";

export default class EdificioSideTab extends React.Component {
    constructor(props){
        super();
     }


    render() {
        return(
            <button type="button" onClick={this.props.inputFct}
            class="btn btn-dark btn-block mt-2">
                <p class="font-weight-bold">{this.props.nombre}</p>
                <p class="font-weight-light">{this.props.direccion}</p>
            </button>
        );
    };
}