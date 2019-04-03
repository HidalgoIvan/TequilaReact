import React, { Component } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles ={
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
class Login extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <form className={styles.container}autoComplete="off">
      <TextField
          required
          label="Mail"
          placeholder="Mail"
          className={styles.textField}
          margin="normal"
          variant="outlined"
        />
      <TextField
          label="Password"
          className={styles.textField}
          type="password"
          placeholder="Password"
          margin="normal"
          variant="outlined"
          />
      <Button variant="outlined" color="primary" className={styles.button}>
        Login
      </Button>
      </form>
      </div>
    );
  }
}

export default Login;
