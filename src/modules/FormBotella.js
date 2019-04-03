import React, { Component } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: 10,
  },
}
class FormBotella extends Component {

  constructor(props) {
    super(props);
    this.state = {
      botella: ''
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <form className={styles.container} autoComplete="off">
          <TextField
            required
            label="Botella"
            placeholder="Botella"
            className="form-group"
            name="botella"
            margin="normal"
            variant="outlined"
            //value={this.state.botella}
            //onChange={(event) => this.handleUserInput(event)}
          />
          
          <Button variant="outlined" color="primary" className={styles.button} > 
            Buscar
        </Button>
      
        </form>
        
      </div >
    );
  }

}

export default FormBotella;
