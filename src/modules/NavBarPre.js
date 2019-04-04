import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class NavBarPre extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
      				<img className="logo" src={require('../img/logo.png')} style={{width: 50, height: 50}} alt="logo"/>
      				<span className="mdc-top-app-bar__title bar__title">Tequila Patrón</span>
          </Toolbar>
      	</AppBar>
        <div style={{height:80}}>
        </div>
      </div>
    );
  }
}

export default NavBarPre;
