import React, { Component } from 'react';
import NavBar from './NavBar';
import CardGrid from './CardGrid';
class Main extends Component {
  render() {
    return (
      <div>
      	<NavBar/>
        <CardGrid/>
      </div>
    );
  }
}

export default Main;
