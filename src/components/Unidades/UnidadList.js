import React from "react";

import { Button } from "react-bootstrap";


import UnidadTab from "./UnidadTab";

function UnidadList (props) {
  return (
    <div class="fill">
      {props.unidades.map(c => <UnidadTab keys={c.id} piso={c.piso} numero={c.numero}
        habitado={c.habitado} id={c.id} nombreEdif={c.edificio.nombre}/>)}
    </div>

  );
}

export default UnidadList;
