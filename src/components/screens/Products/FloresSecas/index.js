import './style.css';
import React from 'react';
import data from './data';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import DetailFlowers from './DetailFlowers';
class FloresSecas extends React.Component {
  render(){
    return (
      <BrowserRouter>
     <div id="bodyF">
         {
        data.products.map(product =>
          <div className="flowers">
          <Route exact path="/FloresSecas" component={FloresSecas}>
          <Link className="link" to={"/DetailFlowers/" + product._id}>
              <img src={product.image} className="floresgral" alt="flores"/>
              <h3 className="productName">{product.name}</h3>
            </Link>
            <h4 className="productPrice">${product.price}</h4>
          </Route>
            </div>
          )
      }
      <Route exact path="/DetailFlowers/:id" component={DetailFlowers}></Route>
        </div>   
        </BrowserRouter>
    );
  }
}

export default FloresSecas;
