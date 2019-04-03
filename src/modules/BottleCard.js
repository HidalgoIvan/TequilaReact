import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = {
  card: {
    maxHeight: 600,
    maxWidth: 600,
    margin: 20,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    borderStyle: "solid",
    textAlign: "center",
    margin: "0 auto"
  },

};
class BottleCard extends Component {
  render() {
    this.state={
      tequila : this.props.tequila,
    }
    return (
      <div>
      {this.state.tequila}
      <Card style={styles.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Información de la botella
        </Typography>
        <img src={require('../img/bottle.png')}/>
        <Typography variant="h5">
          Nombre de tequila
        </Typography>
        <Typography component="p">
          Marca
        </Typography>
        <Typography component="p">
          Submarca
        </Typography>
        <Typography component="p">
          Clasificación
        </Typography>
        <Typography component="p">
          No. de etiqueta
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
  }
}
export default BottleCard;
