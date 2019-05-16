import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottleCard from './BottleCard';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var fabricanteLoca = "";
const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
};
class CardGridFabricantes extends Component {
  updateInputValue = (evt) => {
    console.log("event:", evt.target.value);
    this.setState({
      fabricante: evt.target.value
    });
    fabricanteLoca = evt.target.value
    console.log("fabricante VALUE:", fabricanteLoca);
  }

  render() {
    this.state={
      tequilas: this.props.tequila,
      fabricante: fabricanteLoca,
    }
    var botellasTequila = [];
    if(this.state.tequilas.listTequila[0] !== undefined && this.state.tequilas.listTequila[0] !== null) {
      var laChida = this.state.tequilas.listTequila[0];
      laChida = JSON.parse(laChida).data.botellas;
      var data = laChida;
      if(data[0] != undefined){
        var i = 1;
        data.forEach(item => {
            if(item !== undefined && item.fabricante== this.state.fabricante){
                botellasTequila.push(<BottleCard key={i} fotografia={item.fotografia} marca={item.marca} submarca={item.submarca} fotografia={item.fotografia} clasificacion={item.clasificacion} numeroDeEtiqueta={item.numeroDeEtiqueta}/>);
                i++;
            }
          });
      }
    }
    if(botellasTequila.length == 0)
    {
      botellasTequila.push(<Typography variant='h6' gutterBottom>Ninguna botella coincide con el fabricante {this.state.fabricante}</Typography>);
    }
    return (
      <div className={styles.root}>
        <NavBar/>
        <TextField
          id="outlined-full-width"
          label="fabricante"
          style={{ margin: 8 }}
          placeholder="0123456789"
          helperText="Ingrese su fabricante"
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

export default CardGridFabricantes;
