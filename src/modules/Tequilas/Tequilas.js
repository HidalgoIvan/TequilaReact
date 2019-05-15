import React, { Component } from 'react';
import CardGrid from '../CardGrid.js';

var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');


class Tequilas extends Component {
  state={
    botellas: TodoStore.getTequilas()
  };

  getInitialState =() => {
    return TodoStore.getTequilas();
  }

  _onChange = () => {
    this.setState({botellas: TodoStore.getTequilas()});
  }

  componentDidMount(){
      console.log(this.state.botellas);
      TodoActions.getTequila(this.state.botellas);
      TodoStore.addChangeListener(this._onChange);
  }

  render(){

      return (
        <CardGrid tequila={this.state.botellas}/>
      );
  }
}
export default Tequilas;
