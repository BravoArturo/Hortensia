import './style.css';
import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import DetailDifusers from './DetailDifusers';
class Difusores extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div id="body">
      {
        data.products.map(product =>
          <div className="difussers">
          <Route exact path="/Difusores">
          <Link className="link" to={"/detailDifusser/" + product._id}>
              <img src={product.image} className="difusorgral" alt="difusor"/>
              <h3 className="productName">{product.name}</h3>
          </Link>
            <h4 className="productPrice">${product.price}</h4>
          </Route>
          </div>
          )
      }
      <Route exact path="/detailDifusser/:id"><DetailDifusers /></Route>
      </div>

      </BrowserRouter>
    );
  }
}

export default Difusores;
