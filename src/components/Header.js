import React from 'react';
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

class Header extends React.Component{
    render() {
        return(
    <header className="App-header">
            <Nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar App-header">
              <a class="navbar-brand" href="#"><strong>API</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Actual<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Edificios</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Informacion</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Reclamos</a>
                    </li>
                   </ul>
                   <ul class="navbar-nav nav-flex-icons">
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-twitter"></i></a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link"><i class="fab fa-instagram"></i></a>
                     </li>
                   </ul>
                 </div>
            </Nav>
          </header>
        );
    }
        
} export default Header