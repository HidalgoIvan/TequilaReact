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
    this.state={
      tequila: this.props.tequila
    }
    return (
      <div className={styles.root}>
        <Grid container spacing={24}>
          <BottleCard tequila={this.state.tequila} item xs={24} style={{margin: "0 auto"}}/>
          <BottleCard tequila={this.state.tequila} item xs={24} style={{margin: "0 auto"}}/><BottleCard tequila={this.state.tequila} item xs={24} style={{margin: "0 auto"}}/><BottleCard item xs={24} style={{margin: "0 auto"}}/>
        </Grid>
      </div>
    );
  }
}

export default CardGrid;
