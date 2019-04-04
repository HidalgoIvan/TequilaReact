import React, { Component } from 'react';


var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');
var fabricantesSearch = Array();

class Fabricante extends Component {
  state = {
    fabricantes: TodoStore.getListFabricantes().list,
    fabricante: this.props.match.params.fabricante,
  };

  getInitialState = () => {
    return TodoStore.getListFabricantes();
  }

  _onChange = () => {
    this.setState({ list: TodoStore.getListFabricantes() });
  }

  componentDidMount() {
    console.log(this.state.fabricantes);
    TodoActions.getFabricante(this.state.fabricantes);
    TodoStore.addChangeListener(this._onChange);
  }

  render() {


    this.state.fabricantes.forEach(item => {
      item.forEach(item2 => {
        console.log({ "item": item2 });
        if (item2.nombre === this.state.fabricante) {
          console.log({ "itemsearch": item2 });
          fabricantesSearch.push(item2);
        }
        console.log({ "search": fabricantesSearch });
      });
    });
    return (
      <div>

        {fabricantesSearch}
      </div>

    );
  }
}
export default Fabricante;


