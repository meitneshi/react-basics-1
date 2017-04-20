import React, { Component } from 'react';
import './App.css';
import Header from'../header/Header';
import Footer from '../footer/Footer';
import LeftMenu from '../leftMenu/LeftMenu';
import Board from '../board/Board';
import ToggleLaser from '../toggleLaser/ToggleLaser';
import SendArmy from '../sendArmy/SendArmy';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        label: 'Weapon Test : #'
      },
      stepIndex : 1
    }

    this.updateLabel = this.updateLabel.bind(this);
  }

  updateLabel() {
    this.setState({
      stepIndex: this.state.stepIndex +1
    });
  }

// OLD RENDER WITHOUT ROUTING
  render() {
    return (
      <div>
        <Header data={this.state.data} stepIndex={this.state.stepIndex}/>
        <LeftMenu/>
        <Board updateLabel={this.updateLabel} />
        <br/><hr/>
        <ToggleLaser />
        <br/><hr/>
        <SendArmy />
        <Footer />
      </div>
    );
  }
}

export default App;
