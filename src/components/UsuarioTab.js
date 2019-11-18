import React from 'react'

function UsuarioTab(props){
    return(
        <div class='card'>
            <div class=" rounded bg-warning ">
                <img src="https://placekitten.com/46/46" class="img-responsive rounded float-left m-1"/>
                <h6 class="card-title m-1 font-weight-bold"> props.nombre </h6>
                <h6 class="card-subtitle m-1 font-weight-light">props.documento</h6>
            </div>
        </div>
    );
}
export default UsuarioTab;