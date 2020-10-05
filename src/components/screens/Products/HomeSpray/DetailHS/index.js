import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';

class DetailHS extends React.Component {
  render(){
    const {match} = this.props;
    return (
      <div className="DetailHS">
      <h1>
      El id del home spray es: {match.params.id}
      </h1>
      </div>
    );
  }
}
export default DetailHS;