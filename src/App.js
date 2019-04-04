import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './modules/Main.js';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';
import Tequilas from './modules/Tequilas/Tequilas.js';
import Fabricante from './modules/Fabricante/Fabricante.js';
import TequilasSearch from './modules/Tequilas/TequilasSearch.js';
import Login from './modules/Login.js';
import TequilaTable from './modules/TequilaTable.js';
import Table from './modules/Table.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/botella/:tequila' exact component={InfoBasica}/>
          <Route path='/fabricante/:fabricante' exact component={Fabricante}/>
          <Route path='/table' exact component={Table}/>
          <Route path='/tequilas' exact component={Tequilas}/>
          <Route path='/tequilas/search/:etiqueta' exact component={TequilasSearch}/>

      </BrowserRouter>
    );
  }
}

export default App;
