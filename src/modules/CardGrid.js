import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottleCard from './BottleCard';
import NavBar from './NavBar';
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
    console.log("STATE TEQUILAS");
    console.log(this.state.tequilas.list[0]);

    if(this.state.tequilas.list !== undefined && this.state.tequilas.list !== null) {
      var data = this.state.tequilas.list;
      console.log("DATA 18");
      console.log(data); //Aqui imprime
      var i = 1;
      data.forEach(item => {
          if(item !== undefined){
            item.forEach(item2 => {
              /*item = objeto [] de botellas
              item.marca
              item.submarca
              item.fotografia
              item.clasificacion
              item.numeroDeEtiqueta*/
              botellasTequila.push(<BottleCard key={i} marca={item2.marca} submarca={item2.submarca} fotografia={item2.fotografia} clasificacion={item2.clasificacion} numeroDeEtiqueta={item2.numeroDeEtiqueta}/>);
              i++;
            });

          }
        });
    }else{
      this.render();
    }
    return (
      <div className={styles.root}>
        <NavBar/>
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          {botellasTequila}
        </Grid>
      </div>
    );
  }
}

export default CardGrid;
