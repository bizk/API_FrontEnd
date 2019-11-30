
import React from 'react';
import { Button} from 'react-bootstrap';
class AlbumBoton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          btntext : '',
          isDisabled : ''
      };
    }
    componentWillReceiveProps(){
        if(!this.props.imgs === 0){
            this.setState({
                btntext : 'Este reclamo no tiene imagenes',
                isDisabled : true
            })
        } else if (!this.props.mostrar) {
            this.setState({
                btntext : 'Cerrar album',
                isDisabled : false
            })
        } else {this.setState({
            btntext : 'Ver album',
            isDisabled : false
        })
        }
    }

    render(){
return(
            <Button type="button" variant="primary" block onClick={this.props.onClick}>{this.state.btntext}</Button>
        ) 
                ;
    }
} export default AlbumBoton