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
    textAlign: "center"
  },

};
class BottleCard extends Component {
  render() {
    this.state={
      //tequila : this.props.tequila,
      marca: this.props.marca,
      submarca: this.props.submarca,
      clasificacion: this.props.clasificacion,
      numeroDeEtiqueta: this.props.numeroDeEtiqueta,
      fotografia: this.props.fotografia
    }
    var imgPath = '../' + this.state.fotografia ;
    console.log(imgPath);
    return (
      <div>
      <Card style={styles.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Información de la botella
        </Typography>
        <img src={require(`../${this.state.fotografia}`)} style={{height: 300, width: "auto"}}/>
        <Typography variant="h5">
          {this.state.submarca}
        </Typography>
        <Typography component="p">
          Marca: {this.state.marca}
        </Typography>
        <Typography component="p">
          Clasificación: {this.state.clasificacion}
        </Typography>
        <Typography component="p">
          No. de etiqueta: {this.state.numeroDeEtiqueta}
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
  }
}
export default BottleCard;
