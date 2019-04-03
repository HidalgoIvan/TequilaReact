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
    var clima = [];
          var data = Array.from(this.props.list.list);
          if(this.props.list.list !== undefined && this.props.list.list !== null) {
            data.forEach(item => {
              if(item !== undefined){
              var forecast = Array.from(item.forecast.forecastday);
              forecast.forEach((element, i) => {
                clima.push(<ForeCast key={i} element={element} />);
              });
              }
            });
          }else{
            this.render();
          }
    return (
      <div className={styles.root}>
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          <BottleCard tequila={this.state.tequila} item xs={24} style={{margin: "0 auto"}}/>
        </Grid>
      </div>
    );
  }
}

export default CardGrid;
