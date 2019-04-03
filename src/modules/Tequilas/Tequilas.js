import React, { Component } from 'react';
import CardGrid from '../CardGrid.js';

var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');


class Tequilas extends Component {
  state={
    botellas: TodoStore.getList()
  };

  getInitialState =() => {
    return TodoStore.getList();
  }

  _onChange = () => {
    this.setState({list: TodoStore.getList()});
  }

  componentDidMount(){
      console.log(this.props.botellas);
      TodoActions.getTequila(this.props.botellas);
      TodoStore.addChangeListener(this._onChange);
  }

  render(){

      return (
        <CardGrid tequila={this.state.botellas}/>
      );
  }
}
export default Tequilas;
