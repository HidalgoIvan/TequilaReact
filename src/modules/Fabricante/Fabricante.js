import React, { Component } from 'react';
import FabricanteCard from '../FabricanteCard.js';
import NavBar from '../NavBar.js';
var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');
var fabricantesSearch = [];
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
    console.log({"fabricante":this.state.fabricantes});

    this.state.fabricantes.forEach(item => {
      item.forEach(item2 => {
        console.log({ "item": item2 });
        if (item2.nombre === this.state.fabricante) {
          console.log({ "itemsearch": item2 });
          fabricantesSearch.push(item2);
        }
        // console.log({ "search": fabricantesSearch });
      });
    });
    return (
      // <FabricanteCard nombre={fabricantesSearch['nombre']} marcas={fabricantesSearch['marcas']}/>
      <div>
      <NavBar/>
      {(fabricantesSearch[0] != null && fabricantesSearch[0] != undefined)
        ?
        <FabricanteCard nombre={fabricantesSearch[0].nombre} marcas={fabricantesSearch[0].marcas} desc={fabricantesSearch[0].desc}/>
        : console.log("error")
      }
      </div>
    );
  }
}
export default Fabricante;
