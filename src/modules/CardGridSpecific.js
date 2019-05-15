import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottleCard from './BottleCard';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var TodoStore = require('./Store/Store.js');
var TodoActions = require('./Actions/AppActions.js');

const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
};
class CardGridSpecific extends Component {
  constructor(props) {
    super(props);
    this.state={
      tequilas: this.props.tequila,
      etiqueta: ''
    }
  }
  componentDidMount(){
      TodoActions.getTequila(this.state.botellas);
  }
  handlerUserInput(e){
    const value = e.target.value;
    const name = e.target.name;
    this.setState({etiqueta:value});
  }


  render() {
  
    
    var botellasTequila = [];
    if(this.state.tequilas.listTequila[0] !== undefined && this.state.tequilas.listTequila[0] !== null) {
      var laChida = this.state.tequilas.listTequila[0];
      laChida = JSON.parse(laChida).data.botellas;
      var data = laChida;
      if(data[0] != undefined){
        var i = 1;
        data.forEach(item => {
            if(item !== undefined && item.numeroDeEtiqueta == this.state.etiqueta){
                botellasTequila.push(<BottleCard key={i} fotografia={item.fotografia} marca={item.marca} submarca={item.submarca} fotografia={item.fotografia} clasificacion={item.clasificacion} numeroDeEtiqueta={item.numeroDeEtiqueta}/>);
                i++;
            }
          });
      }
    }
    return (
      <div className={styles.root}>
        <NavBar/>
        <TextField
          id="outlined-full-width"
          name="etiqueta"
          value={this.state.etiqueta}
          className="form-group"
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
          onChange={(event) => this.handlerUserInput(event)}
        />
        <Grid container spacing={24} justify="space-evenly" alignItems="center">
          {botellasTequila}
        </Grid>
      </div>
    );
  }
}

export default CardGridSpecific;
