import React, { Component } from 'react';
import './leftMenu.css';

var unitJsonData = require('../../assets/data/units.json')

class LeftMenu extends Component {
  render() {
    const listItems = unitJsonData.map((unit) =>
      <li key={unit.code}>{unit.availableNumber} {unit.displayName}</li>
    );
    return (
      <div className="leftMenu">
        <h4>Unit Summary</h4>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default LeftMenu;
