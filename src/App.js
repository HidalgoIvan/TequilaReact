import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './modules/Main.js';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' exact component={Main} />
          <Route path='/botella/:tequila' exact component={InfoBasica}/>

      </BrowserRouter>
    );
  }
}

export default App;
