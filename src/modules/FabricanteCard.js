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
  render() {
    this.state={
      nombre: this.props.nombre,
      marcas: this.props.marcas
    }
    var imgPath = '../' + this.state.fotografia ;
    console.log(imgPath);
    return (
      <div>
      <Card style={styles.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {this.state.nombre}
        </Typography>
        <Typography variant="h5">
          Marcas: {this.state.marcas}
        </Typography>
        <Typography component="p">
          Esta es la descripción del fabricante Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
  }
}
export default FabricanteCard;
