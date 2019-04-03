import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="barraNavegacion" class="mdc-top-app-bar mdc-top-app-bar--short barra">
		<div class="mdc-top-app-bar__row ">
			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start logo-section">
				<img class="logo" src="img/logo.png" />
				<span class="mdc-top-app-bar__title bar__title ">Tequila Patrón</span>
			</section>
			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
				<span class="mdc-top-app-bar__title bar__title">Sucursales</span>
				<span class="mdc-top-app-bar__title bar__title">Contacto</span>
				<span class="mdc-top-app-bar__title bar__title">Catálogo</span>
				<span class="mdc-top-app-bar__title bar__title"></span>
			</section>
		</div>
	</header>
	<button id="verificarButton" class="foo-button mdc-button">
		Botón
	</button>
	<div id="verificar" class="verificar">
		<div class="mdc-layout-grid">
				<div class="verifica  mdc-layout-grid__cell mdc-layout-grid__cell--span-6--span-4">
					<h1 class="mdc-typography--headline6 titulo">Verifica tu <b>Tequila</b></h1>
				</div>
			<div class="mdc-layout-grid">
				<div class="mdc-text-field  mdc-layout-grid__cell mdc-layout-grid__cell--span-6--span-4 findTequila">
					<label class="mdc-floating-label" for="findOriginal">Número de Botella</label>
					<input type="text" id="findOriginal" class="mdc- mdc-text-field__input">
					
					</input>
					<button class=" mdc-button" >
						<span class="mdc-button__label">Buscar</span>
					</button>
					<div class="mdc-line-ripple"></div>
				</div>
			</div>
		</div>
	</div>
	<div id="lugares" class="lugares">
		<h1 class="mdc-typography--headline5 mid-title">Sucursales</h1>
		<div class="mdc-layout-grid ">
			<div class="mdc-layout-grid__inner">
				<div class=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div class="tarjeta">
						<img src="ba.jpg" alt="ba.jpg"/>
						<p id="lugar1" class="lugar">Bodegas Alianza</p>
						<p class="precio">450.00 $</p>
						<button class="mdc-button">
							<span class="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
				<div class=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div class="tarjeta">
						<img src="e.jpg" alt="e.jpg"/>
						<p id="lugar2" class="lugar">La Europea</p>
						<p class="precio">450.00 $</p>
						<button class="mdc-button">
							<span class="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
			</div>
			<div class="mdc-layout-grid__inner">
				<div class=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div class="tarjeta">
						<img src="s.png" alt="s.jpg"/>
						<p id="lugar3" class="lugar">Soriana</p>
						<p class="precio">450.00 $</p>

						<button class="mdc-button">
							<span class="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
				<div class=" mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
					<div class="tarjeta">
						<img src="w.jpg" alt="w.jpg"/>
						<p id="lugar4" class="lugar">Walmart</p>
						<p class="precio">450.00 $</p>
						<button class="mdc-button">
							<span class="mdc-button--outlined">Mas Informacion...</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mdc-layout-grid">
		<div id="sugerencias" class="sugerencias">
			<h1 class="mdc-typography--headline5">Sugerencias</h1>
			<form>
			<input type="text" id="suggestions" class="mdc- mdc-text-field__input">
			</input>
			<button class=" mdc-button" >
				<span class="mdc-button__label">Enviar comentarios</span>
			</button>
			</form>
		</div>
	</div>
      </div>
    );
  }
}

export default App;
