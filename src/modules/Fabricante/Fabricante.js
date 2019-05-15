import React, { Component } from 'react';
import FabricanteCard from '../FabricanteCard.js';
import NavBar from '../NavBar.js';
var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');
var fabricantesSearch = [];
class Fabricante extends Component {


  getInitialState = () => {
    return TodoStore.getListFabricantes();
  }

  _onChange = () => {
    this.setState({ fabricantes: TodoStore.getListFabricantes() });
  }

  componentDidMount() {
    console.log(this.state.fabricantes);
    this.setState({
      fabricantes: TodoStore.getListFabricantes() ,
      fabricante: this.props.match.params.fabricante
    });
    TodoActions.getFabricante(this.state.fabricantes);
    TodoStore.addChangeListener(this._onChange);
  }

  render() {
    this.state = {
      fabricantes: TodoStore.getListFabricantes(),
      fabricante: this.props.match.params.fabricante,
    };

    console.log({"fabricante":this.state.fabricantes});
    if(this.state.fabricantes !== undefined && this.state.fabricantes !== null) {
      var data = this.state.fabricantes;
      //data = JSON.parse(data)
      if(data[0] != undefined){
        data = data[0]
        var i = 1;
        data.forEach(item => {
          console.log({ "item": item });
          if (item.nombre === this.state.fabricante) {
            console.log({ "itemsearch": item });
            fabricantesSearch.push(item);
          }
          // console.log({ "search": fabricantesSearch });
      });
    }
    }
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
