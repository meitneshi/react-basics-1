import React, { Component } from 'react';

import './toggleLaser.css'

class ToggleLaser extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOn: false
    };

    this.handleClik = this.handleClik.bind(this);
  }

  handleClik() {
    this.setState(previousState => ({
      isOn: !previousState.isOn
    }));
  }

  render() {
    return (
      <div className="laser">
        <h3>Laser activation</h3>
        <button onClick={this.handleClik}>
          {this.state.isOn ? 'POWER OFF' : 'POWER ON'}
        </button>
        <span className={"laserState-" + (this.state.isOn ? 'on' : 'off')} /> Lasers are {this.state.isOn ? 'activated, BE CAREFULL' : 'shut down, Go! Go! Go!'} 
      </div>
    );
  }
}

export default ToggleLaser;
