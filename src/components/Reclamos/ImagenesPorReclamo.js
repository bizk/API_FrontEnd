import React from 'react';
import { Button } from 'react-bootstrap';
class ImagenesPorReclamo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        mostrar: false
      }
    }


    render() {
    let button;
        if(!this.props.imagenes.lenght > 0){
            button = <Button type="button" variant="primary" disabled block>Este reclamo no tiene imagenes </Button>
        } else if (!this.mostrar) {
            button = <Button type="button" variant="primary" block>Ver album</Button>
        } else {
            button = <Button type="button" variant="primary" block>Cerrar album</Button>
        }

        return (  
        <div class="flex col-12">
            {button}
        </div>
        )
    }


} export default ImagenesPorReclamo