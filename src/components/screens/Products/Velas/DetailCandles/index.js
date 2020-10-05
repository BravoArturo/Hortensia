import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import data from '../data';

class DetailCandles extends React.Component {
  render(){
    const id = this.props.match.params.id;
    const products = data.products.find(x => x._id == id);
    return (
      <div className="bodyDetail">
        <div className="imageDetail">
        <img src={products.image} className="imageDetail" alt="candles"></img>
        </div>
        <div>
        <ul>
          <li><h2>{products.name}</h2></li>
          <li><h3>{products.descripcion}</h3></li>
          <li><h4>${products.price}</h4></li>
        </ul>
        </div>
        <div className="add2cart">
          <ul>
            <li>
              Precio:$ {products.price}
            </li>
            <li>
              Estado: 
            </li>
            <li>
              Cantidad: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button>Añadir al carrito</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default DetailCandles;