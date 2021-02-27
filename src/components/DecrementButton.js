import React, { Component } from 'react';

class DecrementButton extends Component {
  constructor(props){
    super(props);
    this.props.decrement.bind(this);
  }

  // Render
  render() {
    return (
      <button onClick={this.props.decrement}>-</button>
    );
  }
}

export default DecrementButton;