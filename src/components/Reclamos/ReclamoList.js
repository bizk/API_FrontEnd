import React from "react";


import ReclamoTab from "./ReclamoTab";

function ReclamoList (props) {
  return (
    <div class="container-fluid fill">
      { Array.isArray(props.reclamos) ? props.reclamos.map(c => <ReclamoTab key={c.idReclamo} role = {props.role} reclamo={c} />) : <ReclamoTab key={props.reclamos.idReclamo}  role = {props.role} reclamo= {props.reclamos} />}
    </div>
  );
}

export default ReclamoList;