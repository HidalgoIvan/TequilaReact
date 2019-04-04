import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottleCard from './BottleCard';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var etiquetaLoca = "";
const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
};
class CardGridSpecific extends Component {
  updateInputValue = (evt) => {
    console.log("event:", evt.target.value);
    this.setState({
      etiqueta: evt.target.value
    });
    etiquetaLoca = evt.target.value
    console.log("ETIQUETA VALUE:", etiquetaLoca);
  }

  render() {
    this.state={
      tequilas: this.props.tequila,
      etiqueta: etiquetaLoca,
    }
    var botellasTequila = [];
    console.log("STATE TEQUILAS");
    console.log(this.state.tequilas.list);

    if(this.state.tequilas.list !== undefined && this.state.tequilas.list !== null) {
      var data = this.state.tequilas.list;
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
              if(item2.numeroDeEtiqueta == this.state.etiqueta)
              {
              botellasTequila.push(<BottleCard key={i} fotografia={item2.fotografia} marca={item2.marca} submarca={item2.submarca} clasificacion={item2.clasificacion} numeroDeEtiqueta={item2.numeroDeEtiqueta}/>);
              i++;
              }
            });

          }
        });
        if(botellasTequila.length == 0)
        {
          botellasTequila.push(<Typography variant='h6' gutterBottom>Ninguna botella coincide con la etiqueta {this.state.etiqueta}</Typography>);
        }
    }
    return (
      <div className={styles.root}>
        <NavBar/>
        <TextField
          id="outlined-full-width"
          label="Etiqueta"
          style={{ margin: 8 }}
          placeholder="0123456789"
          helperText="Ingrese su número de etiqueta"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.updateInputValue}
        />
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          {botellasTequila}
        </Grid>
      </div>
    );
  }
}

export default CardGridSpecific;
