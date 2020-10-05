import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

class DetailFlowers extends React.Component {
  render(){
    return (
      <div className="DetailFlowers">
      <h1>
      Detalle de las flores
      </h1>
      </div>
    );
  }
}
export default DetailFlowers;