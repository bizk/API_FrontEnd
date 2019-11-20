import React from 'react';

import UsuarioTab from './UsuarioTab'

export default function UsuarioList(props) {
    return(
        <div class="col-12 mt-2">
            {props.personas.map(c => <UsuarioTab keys={c.id} nombre={c.nombre} documento={c.documento}/>)}
        </div>
    );
}
