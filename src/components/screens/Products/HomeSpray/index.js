import './style.css';
import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import DetailHS from './DetailHS';
class HomeSpray extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div id="bodyS">
        {
        data.products.map(product =>
          <div className="HomeSpray">
          <Route exact path="/HomeSpray">
          <Link className="link" to={"/detailHS/" +product._id}>
           <img src={product.image} className="homespraygral" alt="Home Spray"/>
           <h3 className="productName">{product.name}</h3>
          </Link>
            <h4 className="productPrice">${product.price}</h4>
          </Route>
          </div>
          )
      }
      <Route exact path="/detailHS/:id"><DetailHS /></Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default HomeSpray;