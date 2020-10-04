import './style.css';
import React from 'react';
import logo from '../../../../assets/Velas/velasvidriogral.jpg';
import logo1 from '../../../../assets/Velas/velascementogral.jpg';
class Velas extends React.Component {
  render(){
    return (
      <div id="bodyV">
        <div className="candles">
        <img src={logo} className="velasgral" alt="velas"/>
          <h3 className="productName">Velas de Vidrio</h3>
          <h4 className="productPrice">$550</h4>
        </div>
        <div className="candles">
        <img src={logo1} className="velasgral" alt="velas"/>
          <h3 className="productName">Velas de Cemento</h3>
          <h4 className="productPrice">$780</h4>
        </div>

      </div>
    );
  }
}

export default Velas;
