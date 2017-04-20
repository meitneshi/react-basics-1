import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateLabel= this.handleUpdateLabel.bind(this);
  }

  handleUpdateLabel() {
    this.props.updateLabel();
  }

  render() {
    return (
      <div className="board">
        <button type='button' onClick={this.handleUpdateLabel}>Increment Test Number</button>
      </div>

    );
  }
}

export default Board;
