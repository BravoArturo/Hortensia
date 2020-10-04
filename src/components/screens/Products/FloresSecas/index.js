import './style.css';
import React from 'react';
import logo from '../../../../assets/Flores/floresgrandesgral.jpg';
import logo1 from '../../../../assets/Flores/floreschicasgral.jpg';
class FloresSecas extends React.Component {
  render(){
    return (
      <div id="bodyF">
        <div className="flowers">
        <img src={logo} className="floresgral" alt="Flores Grandes"/>
          <h3 className="productName">Flores Grandes</h3>
          <h4 className="productPrice">$600</h4>
        </div>
        <di className="flowers">
        <img src={logo1} className="floresgral" alt="Flores Chicas"/>
          <h3 className="productName">Flores Chicas</h3>
          <h4 className="productPrice">$300</h4>
        </di>
      </div>

      
    );
  }
}

export default FloresSecas;
