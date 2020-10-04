import './style.css';
import React from 'react';
import data from './data';
class HomeSpray extends React.Component {
  render(){
    return (
      <div id="bodyS">
        {
        data.products.map(product =>
          <div className="HomeSpray">
          <img src={product.image} className="homespraygral" alt="Home Spray"/>
          <h3 className="productName">{product.name}</h3>
          <h4 className="productPrice">${product.price}</h4>
          </div>
          )
      }
      </div>
    );
  }
}

export default HomeSpray;