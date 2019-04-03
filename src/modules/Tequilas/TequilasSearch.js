import React, { Component } from 'react';
import CardGridSpecific	 from '../CardGridSpecific.js';

var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');


class TequilasSearch extends Component {
  state={
    botellas: TodoStore.getList(),
    etiqueta: this.props.match.params.etiqueta,
  };

  getInitialState =() => {
    return TodoStore.getList();
  }

  _onChange = () => {
    this.setState({list: TodoStore.getList()});
  }

  componentDidMount(){
      console.log(this.state.botellas);
      TodoActions.getTequila(this.state.botellas);
      TodoStore.addChangeListener(this._onChange);
  }

  render(){

      return (
        <CardGridSpecific tequila={this.state.botellas} etiqueta={this.state.etiqueta}/>
      );
  }
}
export default TequilasSearch;
