import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './modules/Main.js';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';
import Login from './modules/Login.js';
import Tequilas from './modules/Tequilas/Tequilas.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/Main' exact component={Main} />
          <Route path='/botella/:tequila' exact component={InfoBasica}/>
          <Route path='/' exact component={Login} />
          <Route path='/Tequilas' exact component={Tequilas}/>
      </BrowserRouter>
    );
  }
}

export default App;
