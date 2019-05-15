import React, { Component } from 'react';
import NavBarPre from './NavBarPre';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
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
class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: 'hidalgoivanhi@gmail.com',
      password: '123456789',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }



  render() {
    return (
      <div>
        <NavBarPre />
        <form className={styles.container} style={{textAlign: "center"}} autoComplete="off">
          <TextField
            required
            label="Mail"
            placeholder="Mail"
            className="form-group"
            name="email"
            margin="normal"
            variant="outlined"
            value={this.state.email}
            onChange={(event) => this.handleUserInput(event)}
          /><br/>
          <TextField
            label="Password"
            className="form-group"
            name="password"
            type="password"
            placeholder="Password"
            margin="normal"
            variant="outlined"
            value={this.state.password}
            onChange={(event) => this.handleUserInput(event)}
            style={{margin:"0 auto"}}
          /><br/>
          <Button
                variant="outlined" 
                color="primary" 
                style={styles.button} 
                disabled={!this.state.formValid}
                onClick={() => this.login()}
          >
            <Link style={{textDecoration: "none"}}>Login</Link>
      </Button>

        </form>

      </div >
    );
  }
  login(){
    var request = require('request');

    var user = this.state.email;
    var password = this.state.password;

      var queryValues = `{ autenticar(user: "${user}" password: "${password}") { login } }`;
      var json = { query: queryValues };
      request.post({
          headers: { 'content-type': 'application/json' }
          , url: "http://localhost:4000/graphql", body: JSON.stringify(json)
      }, function (error, response, body) {
          var result = JSON.parse(response.body);
          console.log("RESULT", result);
          if(result.data.autenticar!= null && result.data.autenticar!= undefined)
          {
          console.log("LOGIN RESULT", result.data.autenticar.login);
          console.log();
          this.props.history.push("/tequilas")
          }else{
            alert("Usuario o contraseña incorrectos");
          }
      })
    
    //link("/tequilas")
    
  }
  handleUserInput(e) {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

}

export default Login;
