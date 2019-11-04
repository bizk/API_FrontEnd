import React from "react";

import { Button } from "react-bootstrap";

import UnidadTab from "./UnidadTab";

function UnidadList (props) {
  return (
    <div class="container-fluid fill">
      {props.unidades.map(c => <UnidadTab keys={c.id} piso={c.piso} nummero={c.numero}
        habitado={c.habitado} codigoEdificio={c.codigoEdificio} />)}
      <Button>GetEdificios</Button>
    </div>
  );
}

export default UnidadList;
