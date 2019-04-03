import React, { Component } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
  render() {
    return (
      <NavBar/>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
      />
    );
  }
}

export default Login;
