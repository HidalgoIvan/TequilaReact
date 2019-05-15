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
    console.log(this.state.tequilas);
    if(this.state.tequilas !== undefined && this.state.tequilas !== null) {
      var data = this.state.tequilas;
      //data = JSON.parse(data)
      if(data[0] != undefined){
        data = JSON.parse(data);
        var i = 1;
        data.data.botellas.forEach(item => {
            if(item !== undefined){
                botellasTequila.push(<BottleCard key={i} fotografia={item.fotografia} marca={item.marca} submarca={item.submarca} fotografia={item.fotografia} clasificacion={item.clasificacion} numeroDeEtiqueta={item.numeroDeEtiqueta}/>);
                i++;
            }
          });
      }
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
