import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './modules/Login.js';
import NavBarPre from './modules/NavBarPre';
import InfoBasica from './modules/InfoBasica/InfoBasica.js';
import Tequilas from './modules/Tequilas/Tequilas.js';
import Fabricante from './modules/Fabricante/Fabricante.js';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('App component testing', function() {
  it('renders App correctly', function() {
    const wrapper = shallow(<App />);
    const className = <Route path='/' exact component={Login} />;
    expect(wrapper.contains(className)).to.equal(true);
  });
});

describe('Login component testing', function() {
  it('renders Login correctly', function() {
    const wrapper = shallow(<Login />);
    const className = <NavBarPre />;
    expect(wrapper.contains(className)).to.equal(true);
  });
});

describe('Tequilas component testing', function() {
  it('renders Login correctly', function() {
    const wrapper = mount(<Tequilas />);
    console.log("LIST TEQUILAS", wrapper.state());
    expect(wrapper.state().botellas).to.not.equal({});
  });
});

// describe('Login component button disabled testing', function() {
//   it('button disabled', function() {
//     const wrapper = shallow(<Login />);
//     const className = <NavBarPre />;
//     expect(wrapper.contains(className)).to.equal(true);
//   });
// });
