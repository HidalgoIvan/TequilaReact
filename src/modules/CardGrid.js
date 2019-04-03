import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottleCard from './BottleCard';
const styles = {
  root: {
    flexGrow: 1,
  }
};
class CardGrid extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          <BottleCard item xs={24}/>
          <BottleCard item xs={24}/>
          <BottleCard item xs={24}/>
          <BottleCard item xs={24}/>
        </Grid>
      </div>
    );
  }
}

export default CardGrid;
