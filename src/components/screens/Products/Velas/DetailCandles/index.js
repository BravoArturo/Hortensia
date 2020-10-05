import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

class DetailCandles extends React.Component {
  render(){
    const {match} = this.props;
    return (
      <div className="DetailCandles">
      <h1>
      El id de la vela es:{match.params.id}
      </h1>
      </div>
    );
  }
}
export default DetailCandles;