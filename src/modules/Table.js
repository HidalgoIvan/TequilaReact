import React, { Component } from 'react';
import NavBar from './NavBar';
import TequilaTable from './TequilaTable';
const styles = {
  root: {
    flexGrow: 1,
  }
};
class Table extends Component {
  render() {
    
    return (
      <div className={styles.root}>
        <NavBar/>
        <TequilaTable></TequilaTable>
      </div>
    );
  }
}

export default Table;
