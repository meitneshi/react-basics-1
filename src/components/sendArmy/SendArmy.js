import React, { Component } from 'react';

import './sendArmy.css'

var unitJsonData = require('../../assets/data/units.json');

class SendArmy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footman: 0,
      tank: 0,
      warplane: 0,
      warship: 0,
      units: unitJsonData,
      totalPrice:0,
      isSubmitted : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({'isSubmitted': false});
    //only input text, no need to check the type of the input
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    this.setState({'isSubmitted': true});
    //compile price
    var footmanUnitPrice, tankUnitPrice, warplaneUnitPrice, warshipUnitPrice;
    var totalPrice = 0;

    for (var i = 0 ; i < this.state.units.length; i++) {
      let unit = this.state.units[i]
      switch (unit.code) {
        case "FT":
          footmanUnitPrice = unit.unitCost;
          break;
        case "TK":
          tankUnitPrice = unit.unitCost;
          break;
        case "WP":
          warplaneUnitPrice = unit.unitCost;
          break;
        case "WS":
          warshipUnitPrice = unit.unitCost;
          break;
        default:
      }
    }

    totalPrice = this.state.footman * footmanUnitPrice + this.state.tank * tankUnitPrice + this.state.warplane * warplaneUnitPrice + this.state.warship * warshipUnitPrice;
    this.setState({'totalPrice': totalPrice});
    // alert("It will cost you : " + totalPrice + "$")
    event.preventDefault();
  }

  render() {

    const listItems = unitJsonData.map((unit) =>
    <div key={unit.code} >
      {unit.displayName}: <input type="number" name={unit.name} min="0" max={unit.availableNumber} onChange={this.handleChange} defaultValue={0}/>
    </div>
    );

    return (
      <div className="sendArmy">
        <form onSubmit={this.handleSubmit}>
          {listItems}
          <input type="submit" value="Submit" />
        </form>
        <br />
        {this.state.isSubmitted ? <div>This army will cost you : {this.state.totalPrice} US$</div> : null}
      </div>
    );
  }
}

export default SendArmy;
