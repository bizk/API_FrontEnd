import React from "react";

function UnidadTab (props){
  return (
      <div class="m-1 d-flex p-1 bg-secondary rounded ">
        <div class="barra_texto">
          <img src="https://placekitten.com/64/64" class="img-responsive rounded barra"></img>
        </div>
        <div class="barra_texto">
          <p class="h5 card-title">{props.name}</p>
          <p class="barra_texto">#NombreEdif</p>
          <p class="barra_texto">#Piso</p>
          <p class="barra_texto">#Numero</p>
          <p class="barra_texto">#Habilitado</p>
          <p class="barra_texto">Propiedad 1</p>
        </div>
      </div>
  );
}

export default UnidadTab
