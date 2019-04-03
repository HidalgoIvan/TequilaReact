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
      tequilas: this.props.tequila
    }
    var botellasTequila = [];
    var data = Array.from(this.state.tequilas);
    if(this.props.tequila !== undefined && this.props.tequila !== null) {
      console.log(data); //Aqui imprime
      data.forEach(item => {
        if(item !== undefined){
          /*
          item = objeto [] de botellas
          item.marca
          item.submarca
          item.fotografia
          item.clasificacion
          item.numeroDeEtiqueta
          */
          // botellasTequila.push(<BottleCard key={item.numeroDeEtiqueta} .... />);
        }
        });
    }else{
      this.render();
    }
    return (
      <div className={styles.root}>
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          {botellasTequila}
        </Grid>
      </div>
    );
  }
}

export default CardGrid;
