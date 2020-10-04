import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import logo from '../../../assets/Logos/logoh.jpg';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
      </div>
    );
  }
}
export default Home;
