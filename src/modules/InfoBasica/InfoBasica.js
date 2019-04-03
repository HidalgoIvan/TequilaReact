import React, { Component } from 'react';
import './InfoBasica.css';
class InfoBasica extends Component {
  render() {
    this.state={
      tequila: this.props.match.params.tequila,
    }
    return (
        <div>
          {this.state.tequila}
        </div>
    );
  }
}
export default InfoBasica;
