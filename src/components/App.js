import React from 'react';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import insta from '../assets/Logos/instalogo.png';
import Difusores from './screens/Products/Difusores';
import FloresSecas from './screens/Products/FloresSecas';
import HomeSpray from './screens/Products/HomeSpray';
import Velas from './screens/Products/Velas';
import Cart from './screens/Cart';
import SignIn from './screens/SignIn';
import principallogo from '../assets/Logos/hlogo.png';
import Jabones from './screens/Products/Jabones';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <div className="up2header">
        <Link className="link0" to="/Cart">Carrito</Link>
        <Link className="link0" to="/SignIn">Iniciar Sesión</Link>
      </div>
      <header className="up">
              <Link className="followUs" to="/Hortensia">
              <img src={principallogo} className="principallogo" alt="logo"/>
              </Link>
              <div>
              Nuestros productos
                <ul className="subMenuProducts">
                  <li><Link className="link1" to="/HomeSpray">Home Spray</Link></li>
                  <li><Link className="link1" to="/Difusores">Difusores</Link></li>
                  <li><Link id="linkVelas" className="link1" to="/Velas">Velas</Link></li>
                  <li><Link className="link1" to="/FloresSecas">Flores Secas</Link></li>
                  <li><Link className="link1" to="/Jabones">Jabones</Link></li>
                </ul>
              </div>
              <a  className="followUs" target="_blank" href="https://www.instagram.com/hortensia.scents/?hl=es-la">
                   <div>Seguinos en redes</div>
                  <img src={insta} className="instalogo" alt="logo"/>
              </a>
              <div>¿Quienes somos?</div>      
        </header>
        <main className="main">
                  <Route exact path="/Cart"><Cart /></Route>
                  <Route exact path="/SignIn"><SignIn /></Route>
                  <Route exact path="/Hortensia"><Home /></Route>
                  <Route exact path="/HomeSpray"><HomeSpray /></Route>
                  <Route exact path="/Difusores"><Difusores /></Route>
                  <Route exact path="/Velas"><Velas /></Route>
                  <Route exact path="/FloresSecas"><FloresSecas /></Route>
                  <Route exact path="/Jabones"><Jabones /></Route>
        </main>
        <footer className="footer">Todos los derechos reservados.</footer>   
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
