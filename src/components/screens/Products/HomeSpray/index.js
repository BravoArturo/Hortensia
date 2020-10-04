import './style.css';
import React from 'react';
import logo from '../../../../assets/HomeSpray/homespraygral.jpg';
class HomeSpray extends React.Component {
  render(){
    return (
      <div id="bodyHS">
        <img src={logo} className="homespraygral" alt="HomeSpray"/>
        <h3 className="productName">Home Spray</h3>
        <h4 className="productPrice">$420</h4>
      </div>
    );
  }
}

export default HomeSpray;
