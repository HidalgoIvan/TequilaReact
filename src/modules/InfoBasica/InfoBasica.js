import React, { Component } from 'react';
import './InfoBasica.css';
import NavBar from '../NavBar';
import CardGrid from '../CardGrid';
class InfoBasica extends Component {
  render() {
    this.state={
      tequila: this.props.match.params.tequila,
    }
    return (
        <div>
          {this.state.tequila}
          <NavBar/>
          <CardGrid tequila={this.state.tequila}/>
        </div>
    );
  }
}
export default InfoBasica;
