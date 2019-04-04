import React, { Component } from 'react';
import NavBarPre from './NavBarPre';
import CardGrid from './CardGrid';
class Main extends Component {
  render() {
    return (
      <div>
      	<NavBarPre/>
        <CardGrid/>
      </div>
    );
  }
}

export default Main;
