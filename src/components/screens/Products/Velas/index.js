import './style.css';
import React from 'react';
import data from './data';
class Velas extends React.Component {
  render(){
    
    return (
      <div id="bodyV">
         {
           data.products.map(product =>   
            <div className="candles">
            <img src={product.image} className="velasgral" alt="velas"/>
            <h3 className="productName">{product.name}</h3>
            <h4 className="productPrice">${product.price}</h4>
            </div>
          )
      }
      </div>
    );
  }
}

export default Velas;
