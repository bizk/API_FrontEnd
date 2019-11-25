import React from 'react';
import {render} from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      usuario: "",
      pwd:"",
      role:"",
    }
 }

 componentDidMount() {

 }

 handleUsrChange(event) {
   this.setState({usuario: event.target.value})
 }
 handlePwdChange(event) {
   this.setState({pwd: event.target.value})
 }

 handleClickLogin(){
   if (this.state.usuario === "admin" && this.state.pwd === "admin") {
     this.setState({role: "admin"});
   } else {
     this.setState({role: "usr"});
   }
   //We should fetch with the login uril here
   //
   //LOGIN URIL SHOULD BE UP HERE AND DO STH}
   var handleUsrChange = this.props.handleUsrChange;
   handleUsrChange(this.state.userName, this.state.role);
 }

  render() {
    const bckgImageUrl = "https://f.vividscreen.info/soft/fb5005e7222625f22dfb16a28aaefe1e/Buenos-Aires-Argentina-1920x1080.jpg";
    const bckgColorOpacity = {
      opacity: "0.85",
    }
    const backgroundImage = {
      backgroundImage: "url("+ bckgImageUrl+ ")",
      backgroundColor:"black",
    }

    return (
      <div class="bg-dark fill" style={backgroundImage}>
        <div class="p-5 float container col-4 rounded" style={bckgColorOpacity}>
            <div class="bg-dark d-flex justify-content-center text-white">
              <p class="h2 pt-2 ">Reclamos</p>
            </div>
            <div class="bg-light float rounded bg-white ">
              <div class="pt-2 d-flex justify-content-center border-bottom border-secondary">
                <p class="h3">Iniciar sesion</p>
              </div>
              <div class="p-2">
                <div class="form-group col-md-12">
                  <label for="inputUsr">Usuario</label>
                  <input type="text" class="form-control" value={this.state.value}
                    placeHolder="Usuario" onChange={this.handleUsrChange.bind(this)}/>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputPwd">Contraseña</label>
                  <input type="password" class="form-control" onChange={this.handlePwdChange.bind(this)}
                    value={this.state.value} placeHolder="Contraseña" />
                </div>
              </div>
              <div class="pb-4 pt-2 d-flex justify-content-center ">
                <button class="col-8 align-justify-content btn btn-info btm-rounded"
                  onClick={this.handleClickLogin.bind(this)}>Iniciar sesion</button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
