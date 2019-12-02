import React from "react";

function UnidadTab (props){
  return (
      <div class={"d-flex float-left col-6 p-1 rounded " + (props.habitado ? "bg-success" : "bg-light") +""}>
        <div class="barra_texto">
          <img src="https://placekitten.com/64/64" class="img-responsive rounded barra"></img>
        </div>
        <div class="barra_texto">
          <p class="h5 mt-1 card-title"> Unidad {props.id}</p>
          <p class="barra_texto">{props.nombreEdif}</p>
          <p class="barra_texto">- Piso: {props.piso}</p>
          <p class="barra_texto">- Numero {props.numero}</p>
        </div>
      </div>
  );
}

export default UnidadTab
