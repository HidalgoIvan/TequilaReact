import React, { Component } from 'react';
import '../App.css';
class Main extends Component {
  render() {
    return (
    	<div className="App">
        <header id="barraNavegacion" className="mdc-top-app-bar mdc-top-app-bar--short barra">
		<div className="mdc-top-app-bar__row ">
			<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start logo-section">
				<img className="logo" src={require('../img/logo.png')} alt="logo"/>
				<span className="mdc-top-app-bar__title bar__title ">Tequila Patrón</span>
			</section>
			<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
				<span className="mdc-top-app-bar__title bar__title">Sucursales</span>
				<span className="mdc-top-app-bar__title bar__title">Contacto</span>
				<span className="mdc-top-app-bar__title bar__title">Catálogo</span>
				<span className="mdc-top-app-bar__title bar__title"></span>
			</section>
		</div>
	</header>
	<button id="verificarButton" className="foo-button mdc-button">
		Botón
	</button>
	<div id="verificar" className="verificar">
		<div className="mdc-layout-grid">
				<div className="verifica  mdc-layout-grid__cell mdc-layout-grid__cell--span-6--span-4">
					<h1 className="mdc-typography--headline6 titulo">Verifica tu <b>Tequila</b></h1>
				</div>
			<div className="mdc-layout-grid">
				<div className="mdc-text-field  mdc-layout-grid__cell mdc-layout-grid__cell--span-6--span-4 findTequila">
					<label className="mdc-floating-label">Número de Botella</label>
					<input type="text" id="findOriginal" className="mdc- mdc-text-field__input">
					
					</input>
					<button className=" mdc-button" >
						<span className="mdc-button__label">Buscar</span>
					</button>
					<div className="mdc-line-ripple"></div>
				</div>
			</div>
		</div>
	</div>
	<div id="lugares" className="lugares">
		<h1 className="mdc-typography--headline5 mid-title">Sucursales</h1>
		<div className="mdc-layout-grid ">
			<div className="mdc-layout-grid__inner">
				<div className=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div className="tarjeta">
						<img src={require('../img/ba.jpg')} alt="ba.jpg"/>
						<p id="lugar1" className="lugar">Bodegas Alianza</p>
						<p className="precio">450.00 $</p>
						<button className="mdc-button">
							<span className="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
				<div className=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div className="tarjeta">
						<img src={require('../img/e.jpg')} alt="e.jpg"/>
						<p id="lugar2" className="lugar">La Europea</p>
						<p className="precio">450.00 $</p>
						<button className="mdc-button">
							<span className="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
			</div>
			<div className="mdc-layout-grid__inner">
				<div className=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div className="tarjeta">
						<img src={require('../img/s.png')} alt="s.jpg"/>
						<p id="lugar3" className="lugar">Soriana</p>
						<p className="precio">450.00 $</p>

						<button className="mdc-button">
							<span className="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
				<div className=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div className="tarjeta">
						<img src={require('../img/w.jpg')} alt="w.jpg"/>
						<p id="lugar4" className="lugar">Walmart</p>
						<p className="precio">450.00 $</p>
						<button className="mdc-button">
							<span className="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="mdc-layout-grid">
		<div id="sugerencias" className="sugerencias">
			<h1 className="mdc-typography--headline5">Sugerencias</h1>
			<form>
			<input type="text" id="suggestions" className="mdc- mdc-text-field__input">
			</input>
			<button className="mdc-button" >
			form	<span className="mdc-button__label">Enviar comentarios</span>
			</button>
			</form>
		</div>
	</div>
</div>
    );
  }
}

export default Main;