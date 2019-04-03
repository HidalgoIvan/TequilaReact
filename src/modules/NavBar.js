import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import '../App.css';
class NavBar extends Component {
  render() {
    return (
    	<div>
        <AppBar>
          <Toolbar>
      				<img className="logo" src={require('../img/logo.png')} style={{width: 50, height: 50}} alt="logo"/>
      				<span className="mdc-top-app-bar__title bar__title">Tequila Patrón</span>
      				<span className="mdc-top-app-bar__title bar__title">Sucursales</span>
      				<span className="mdc-top-app-bar__title bar__title">Contacto</span>
      				<span className="mdc-top-app-bar__title bar__title">Catálogo</span>
      				<span className="mdc-top-app-bar__title bar__title"></span>
          </Toolbar>
      	</AppBar>
	   </div>
    );
  }
}

export default NavBar;
