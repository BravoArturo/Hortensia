import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

class DetailFlowers extends React.Component {
  render(){
    const { match } = this.props;
    return (
      <div className="DetailFlowers">
      <h1>
      El id de las flores es: {match.params.id}
      </h1>
      </div>
    );
  }
}
export default DetailFlowers;