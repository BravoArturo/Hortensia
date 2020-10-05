import './style.css';
import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import DetailCandles from './DetailCandles';
class Velas extends React.Component {
  render(){
    
    return (
      <BrowserRouter>
      <div id="bodyV">
         {
           data.products.map(product => 
            <div className="candles">
            <Route exact path="/Velas" component={DetailCandles}>
            <Link className="link" to={"/DetailCandles/" + product._id}>
             <img src={product.image} className="velasgral" alt="velas"/>
             <h3 className="productName" >{product.name}</h3>
            </Link>
              <h4 className="productPrice">${product.price}</h4>
            </Route>
            </div>
          )
      }
      <Route exact path="/DetailCandles/:id" component={DetailCandles}></Route> 
      </div>
      </BrowserRouter> 
    );
  }
}

export default Velas;
