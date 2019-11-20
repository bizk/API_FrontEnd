import React from "react";

function ReclamoTab(props){

 return (
      <div class=" m-1 d-flex p-1 bg-secondary rounded ">
        <div class="col-10 barra_texto">
          <p class="h4 card-title">Reclamo #{props.reclamo.numero}</p>
          <p class="h5">Descripcion</p>
          <p class="barra_texto">{props.reclamo.descripcion}</p>
          <p class="h5">Ubicacion</p>
          <p class="barra_texto">{props.reclamo.ubicacion}</p>

        </div>
        <div class="col-2 container allingn-v-center imagen">
          <img src="https://placekitten.com/128/128" class="img-responsive rounded barra"></img>
        </div>
      </div>
  )
  ;
}

export default ReclamoTab