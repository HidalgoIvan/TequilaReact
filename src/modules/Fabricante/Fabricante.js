import React, {Component} from 'react';
import CardGridFabricantes from '../CardGridFabricantes.js';

var TodoActions = require('../Actions/AppActions.js');
var TodoStore = require('../Store/Store.js');

class Fabricante extends Component {
  state={
    fabricantes: TodoStore.getList().list,
    fabricante: this.props.match.params.fabricante,
  };

  getInitialState =() => {
    return TodoStore.getList();
  }

  _onChange = () => {
    this.setState({list: TodoStore.getList()});
  }

  componentDidMount(){
      console.log(this.state.fabricantes);
      TodoActions.getTequila(this.state.fabricantes);
      TodoStore.addChangeListener(this._onChange);
  }

  render(){

      return (
        <CardGridFabricantes tequila={this.state.botellas} fabricante={this.state.fabricante}/>
      );
  }
}
export default Fabricante;


