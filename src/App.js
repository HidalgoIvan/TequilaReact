import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './modules/Main.js';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';
import Login from './modules/Login.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/Main' exact component={Main} />
          <Route path='/botella/:tequila' exact component={InfoBasica}/>
          <Route path='/' exact component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
