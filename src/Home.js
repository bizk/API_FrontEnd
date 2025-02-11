import React from 'react';
import './components/App.css';
import Login from "./Login";
import App from './App';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      userName : "",
      role: ""
    }
 }

 handleUsrChange(usr, role) {
   this.setState({userName: usr, role: role});
 }

 handleLogOff() {
   this.setState({userName: "", role:" "});
 }

  render() {
    return (
      <div>
        {(this.state.username === "" || this.state.role === "") ?
           <Login handleUsrChange={this.handleUsrChange.bind(this)}/> :
           <App role={this.state.role} userName={this.state.userName} handleLogOff={this.handleLogOff.bind(this)}/>}
      </div>
    );
  }
}

export default Home;
