import React, { Component } from 'react';


class IncrementButton extends Component {
  constructor(props){
    super(props);

  this.props.increment.bind(this);
 
  }
  // Render
  render() {
    return (
      <button onClick={this.props.increment}>+</button>
    );
  }
}

export default IncrementButton;