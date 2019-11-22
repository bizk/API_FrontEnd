import React from "react";


import ReclamoTab from "./ReclamoTab";

function ReclamoList (props) {
  return (
    <div class="container-fluid fill">
      { Array.isArray(props.reclamos) ? props.reclamos.map(c => <ReclamoTab reclamo={c} />) : <ReclamoTab reclamo= {props.reclamos} />}
    </div>
  );
}

export default ReclamoList;