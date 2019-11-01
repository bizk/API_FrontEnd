import React from "react";

import { Button } from "react-bootstrap";

import UnidadTab from "./UnidadTab";

function UnidadList (props) {
  return (
    <div class="container-fluid fill">
      {props.contacts.map(c => <UnidadTab keys={c.id} name={c.name} />)}
      <Button>GetEdificios</Button>
    </div>
  );
}

export default UnidadList;
