import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import axios from 'axios';
import AlbumBoton from './AlbumBoton';
class ImagenesPorReclamo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        mostrar: false,
        imagenes:[],
      }
      this.changeMostrar = this.changeMostrar.bind(this);
    }
    
    changeMostrar(){
        let nuevoEstado = !this.state.mostrar
        this.setState({
            mostrar: nuevoEstado
        })

    }


    componentDidMount(){
        let url= 'http://localhost:8080/apiRest/imagenesPorReclamo?nroreclamo='+this.props.nroreclamo
      axios.get(url).then(response =>
        this.setState({
            imagenes: response.data
        })
      )
    }

    render() {
    let button;
    
        if(this.state.imagenes.lenght === 0){
            button = <Button type="button" variant="primary" disabled block>Este reclamo no tiene imagenes </Button>
        } else if (!this.mostrar) {
            button = <Button type="button" variant="primary" block onClick={this.changeMostrar}>Ver album</Button>
        } else {
            button = <Button type="button" variant="primary" block onClick={this.changeMostrar}>Cerrar album</Button>
        }
        let itemscarousel = (this.state.imagenes.map(item =>  
            {return (item == 404 ? 
                (<Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= 'https://cdn.rswebsols.com/wp-content/uploads/2018/02/404-error-not-found.jpg'
                        alt="La imagen ha sido borrada de la nube o su acceso ha sido actualizado."
                        />
                </Carousel.Item> ) : 
                (<Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {item.direccion}
                        alt="Imagen del reclamo"
                        />
                </Carousel.Item>) )             
            }))
    
        console.log('items ' + itemscarousel)
           

        {/* {return (link ===404 ? (<div/>)  : (<Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {link}
                    alt="slide"
                 />
            </Carousel.Item>))})})) */}

        return (  
        <div class="flex col-12">
           
            {this.state.mostrar ?  (<Carousel>
            {itemscarousel}
        </Carousel>) : <div/>}
        <AlbumBoton key= {'btn'+this.props.nroreclamo} imgs={this.state.imagenes.lenght} onClick={this.changeMostrar} mostrar={this.state.mostrar} />
        </div>
        )
    }


} export default ImagenesPorReclamo