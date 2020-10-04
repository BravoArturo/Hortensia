import './style.css';
import React from 'react';
import logo from '../../../../assets/Difusores/difusorgral.jpg';
class Difusores extends React.Component {
  render(){
    return (
      <div id="body">
        <img src={logo} className="difusorgral" alt="difusor"/>
        <h3 className="productName">Difusor</h3>
        <h4 className="productPrice">$750</h4>
      </div>
    );
  }
}

export default Difusores;
