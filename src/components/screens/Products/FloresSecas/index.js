import './style.css';
import React from 'react';
import data from './data';
class FloresSecas extends React.Component {
  render(){
    return (
      <div id="bodyF">
         {
        data.products.map(product =>
          <div className="flowers">
          <img src={product.image} className="floresgral" alt="flores"/>
          <h3 className="productName">{product.name}</h3>
          <h4 className="productPrice">${product.price}</h4>
          </div>
          )
      }
        </div>   
    );
  }
}

export default FloresSecas;
