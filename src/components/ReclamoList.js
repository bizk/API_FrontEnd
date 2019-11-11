import React from "react";


import ReclamoTab from "./ReclamoTab";

function ReclamoList (props) {
  return (
    <div class="container-fluid fill">
      {props.posts.map(c => <ReclamoTab reclamo={c} />)}
    </div>
  );
}

export default ReclamoList;