import './style.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import data from '../data';
import Difusores from '..';


class DetailDifusers extends React.Component {
  render(){
    const {match} = this.props;
    return (
      <div className="DetailDifusers">
      <h1>El id del producto es:{match.params.id}</h1>
      </div>
    );
  }
}
export default DetailDifusers;
