import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    var data = this.props.data;
    var stepIndex = this.props.stepIndex;

    return (
      <div className="header">
        {data.label} {stepIndex}
      </div>
    );
  }
}

export default Header;
