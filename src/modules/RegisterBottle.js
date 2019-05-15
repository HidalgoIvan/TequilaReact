import React, { Component } from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    }
};
class RegisterBottle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clasificacion: '',
            fotografia: '',
            marca: '',
            numeroDeEtiqueta: '',
            submarca: '',
            formErrors: { clasificacion: '', fotografia: '', marca: '', numeroDeEtiqueta: '', submarca: '' },
            clasificacionValid: false,
            fotografiaValid: false,
            marcaValid: false,
            numeroDeEtiquetaValid: false,
            submarcaValid: false,
            formValid: false
        }
    }


    handleUserInput(e) {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        let clasificacionValid = this.state.clasificacionValid;
        let fotografiaValid = this.state.fotografiaValid;
        let marcaValid = this.state.marcaValid;
        let numeroDeEtiquetaValid = this.state.numeroDeEtiquetaValid;
        let submarcaValid = this.state.submarcaValid;
        let formValid = this.state.formValid;

        switch (fieldName) {
            case 'clasificacion':
                clasificacionValid = value.length >= 3;
                fieldValidationErrors.clasificacion = clasificacionValid ? '' : ' is invalid';
                break;
            case 'fotografia':
                fotografiaValid = value.length >= 3;
                fieldValidationErrors.fotografia = fotografiaValid ? '' : ' is too short';
                break;
            case 'marca':
                marcaValid = value.length >= 3;
                fieldValidationErrors.marca = marcaValid ? '' : ' is too short';
                break;
            case 'numeroDeEtiqueta':
                numeroDeEtiquetaValid = value.match(/^([0-9]+)/i) && value.length >= 6;
                fieldValidationErrors.numeroDeEtiqueta = numeroDeEtiquetaValid ? '' : ' is too short';
                break;
            case 'submarca':
                submarcaValid = value.length >= 3;
                fieldValidationErrors.submarca = submarcaValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            clasificacionValid: clasificacionValid,
            fotografiaValid: fotografiaValid,
            marcaValid: marcaValid,
            numeroDeEtiquetaValid: numeroDeEtiquetaValid,
            submarcaValid: submarcaValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({
            formValid: this.state.clasificacionValid &&
                this.state.fotografiaValid &&
                this.state.marcaValid &&
                this.state.numeroDeEtiquetaValid &&
                this.state.submarcaValid
        });
    }

    render() {

        return (
            <div className={styles.root}>
                <NavBar />
                <form className={styles.container} style={{ textAlign: "center" }} autoComplete="off">
                    <TextField
                        required
                        label="clasificacion"
                        placeholder="Clasificacion"
                        className="form-group"
                        name="clasificacion"
                        margin="normal"
                        variant="outlined"
                        value={this.state.clasificacion}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <br />
                    <TextField
                        required
                        label="fotografia"
                        placeholder="fotografia"
                        className="form-group"
                        name="fotografia"
                        margin="normal"
                        variant="outlined"
                        value={this.state.fotografia}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <br />
                    <TextField
                        required
                        label="marca"
                        placeholder="marca"
                        className="form-group"
                        name="marca"
                        margin="normal"
                        variant="outlined"
                        value={this.state.marca}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <br />
                    <TextField
                        required
                        label="numeroDeEtiqueta"
                        placeholder="numeroDeEtiqueta"
                        className="form-group"
                        name="numeroDeEtiqueta"
                        margin="normal"
                        variant="outlined"
                        value={this.state.numeroDeEtiqueta}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <br />
                    <TextField
                        required
                        label="submarca"
                        placeholder="submarca"
                        className="form-group"
                        name="submarca"
                        margin="normal"
                        variant="outlined"
                        value={this.state.submarca}
                        onChange={(event) => this.handleUserInput(event)}
                    />
                    <br />
                    <Button
                        variant="outlined"
                        color="primary"
                        style={styles.button}
                        disabled={!this.state.formValid}
                        onClick={this.registrarBottle.bind(this)}
                    >
                        Registrar
            </Button>
                </form>
            </div>
        );
    }

    registrarBottle() {
        console.log("Registrar");
        console.log(this.state);
        
        var clasificacion = this.state.clasificacion;
        var fotografia = this.state.fotografia;
        var marca = this.state.marca;
        var numeroDeEtiqueta = this.state.numeroDeEtiqueta;
        var submarca = this.state.submarca;

        
        var request = require('request');
        var queryValues = `{ registrarBotella(clasificacion: "${clasificacion}" fotografia: "${fotografia}" marca: "${marca}" numeroDeEtiqueta: "${numeroDeEtiqueta}" submarca: "${submarca}") { message } }`;
        var json = { query: queryValues };
        request.post({
            headers: { 'content-type': 'application/json' }
            , url: "http://localhost:4000/graphql", body: JSON.stringify(json)
        }, function (error, response, body) {
            console.log("HOLA");
            var result = JSON.parse(response.body);
           
        })
    }


}

export default RegisterBottle;
