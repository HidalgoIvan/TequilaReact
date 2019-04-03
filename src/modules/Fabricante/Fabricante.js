import React, {Component} from 'react';

class Fabricante extends Component {
  render(){
    this.state={
      fabricante : this.props.match.params.fabricante;
    }
    return(
      {}
    );}
}
