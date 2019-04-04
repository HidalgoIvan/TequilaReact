import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  card: {
    maxHeight: 600,
    maxWidth: 600,
    margin: 20,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    borderStyle: "solid",
    textAlign: "center"
  },

};
class FabricanteCard extends Component {
  state={
    nombre: this.props.nombre,
    marcas: this.props.marcas,
    desc: this.props.desc
  }
  render() {

    var imgPath = '../' + this.state.fotografia ;
    console.log(imgPath);
    return (
      <div>
      <Card style={styles.card}>
      <CardContent>
        <Typography variant="h5" >
          {this.state.nombre}
        </Typography>
        <Typography>
          Marcas: {this.state.marcas}
        </Typography>
        <Typography component="p">
          {this.state.desc}
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
  }
}
export default FabricanteCard;
