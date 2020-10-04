import './style.css';
import React from 'react';
import data from './data';
class Difusores extends React.Component {
  render(){
    return (
      <div id="body">
      {
        data.products.map(product =>
          <div className="difussers">
          <img src={product.image} className="difusorgral" alt="difusor"/>
          <h3 className="productName">{product.name}</h3>
          <h4 className="productPrice">${product.price}</h4>
          </div>
          )
      }
      </div>
    );
  }
}

export default Difusores;
