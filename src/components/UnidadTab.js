import React from "react";

function UnidadTab (props){
  return (
      <div class="m-1 d-flex p-1 bg-secondary rounded ">
        <div class="barra_texto">
          <img src="https://placekitten.com/64/64" class="img-responsive rounded barra"></img>
        </div>
        <div class="barra_texto">
          <p class="h5 card-title">{props.identificador}</p>
          <p class="barra_texto">{props.codigoEdificio} nombre edif</p>
          <p class="barra_texto">#Piso {props.piso}</p>
          <p class="barra_texto">#Numero {props.numero}</p>
          <p class="barra_texto">#Habilitado {props.habitado}</p>
          <p class="barra_texto">Propiedad 1</p>
        </div>
      </div>
  );
}

export default UnidadTab
