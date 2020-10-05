import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

class DetailCandles extends React.Component {
  render(){
    return (
      <div className="DetailCandles">
      <h1>
      Detalle de las velas
      </h1>
      </div>
    );
  }
}
export default DetailCandles;