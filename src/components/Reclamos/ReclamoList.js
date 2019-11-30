import React from "react";


import ReclamoTab from "./ReclamoTab";

function ReclamoList (props) {
  return (
    <div class="container-fluid fill">
      { Array.isArray(props.reclamos) ? props.reclamos.map(c => <ReclamoTab key={c.idReclamo} reclamo={c} />) : <ReclamoTab key={props.reclamos.idReclamo} reclamo= {props.reclamos} />}
    </div>
  );
}

export default ReclamoList;