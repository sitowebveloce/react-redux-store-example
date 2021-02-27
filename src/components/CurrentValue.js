import React, { Component } from 'react';


class CurrentValue extends Component {
  constructor(props){
    super(props);
    this.props.reset.bind(this);
    this.props.isOdd.bind(this);
  }
  // Render
  render() {
    return (
        <div className='currentValue' 
        style={
        this.props.value === 0 ? {color:'black'} : 
        this.props.isOdd(this.props.value) === 0 ? {color:'green'} : {color:'red'} 
        }>
         <div className='val'> {this.props.value} </div>
         <button onClick={this.props.reset}> Reset</button>
        </div>
    );
  }
}

export default CurrentValue;