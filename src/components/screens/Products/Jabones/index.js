import './style.css';
import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import DetailsSoap from './DetailsSoap';
class Jabones extends React.Component {
  render(){
    
    return (
      <BrowserRouter>
      <div id="bodyS">
         {
           data.products.map(product => 
            <div className="soaps">
            <Route exact path="/Jabones" component={Jabones}>
            <Link className="link" to={"/DetailsSoap/" + product._id}>
             <img src={product.image} className="jabonesgral" alt="Jabones"/>
             <h3 className="productName" >{product.name}</h3>
            </Link>
              <h4 className="productPrice">${product.price}</h4>
            </Route>
            </div>
          )
      }
      <Route exact path="/DetailsSoap/:id" component={DetailsSoap}></Route> 
      </div>
      </BrowserRouter> 
    );
  }
}

export default Jabones;