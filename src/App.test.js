import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './modules/Login.js';
import NavBarPre from './modules/NavBarPre';
import CardGrid from './modules/CardGrid';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';
import Tequilas from './modules/Tequilas/Tequilas.js';
import Fabricante from './modules/Fabricante/Fabricante.js';
import { configure, shallow, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

// describe('App component testing', function() {
//   it('renders App correctly', function() {
//     const wrapper = mount(<App />);
//     const className = <Route path='/' exact component={Login} />;
//     expect(wrapper.contains(className)).toBeTruthy();
//   });
// });

describe('Login component testing', function() {
  it('renders Login correctly', function() {
    const wrapper = mount(<Login />);
    const className = <NavBarPre />;
    expect(wrapper.containsMatchingElement(className)).toBeTruthy();
  });
});

// describe('Tequilas cardgrid testing', function() {
//   it('renders Tequila cardgrid correctly', function() {
//     const wrapper = mount(<Tequilas />);
//     expect(wrapper.containsMatchingElement(<CardGrid />)).toBeTruthy();
//   });
// });
//
// describe('Tequilas component testing', function() {
//   it('tequila state correctly', function() {
//     const wrapper = mount(<Tequilas />);
//     expect(wrapper.state('botellas').count).not.toEqual(0);
//   });
// });
//
// describe('Fabricante testing', function() {
//   it('renders Fabricante state correctly', function() {
//     const wrapper = mount(<Fabricante match={{params:{ fabricante: "" }}} />);
//     expect(wrapper.state('fabricantes').count).not.toEqual(0);
//   });
// });
