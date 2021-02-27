import React, { Component } from 'react';
import './App.css';
import CurrentValue from './components/CurrentValue';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import Faces from './components/Faces';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value : 0
    }

    // bind
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.isOdd = this.isOdd.bind(this);
  }
  // Increment
  increment = ()=>{
    console.log('click', this.state.value)
    let num = this.state.value + 1;
    this.setState({value : num});
  }
  // Decrement
  decrement = ()=>{
    console.log('click', this.state.value)
    if(this.state.value === 0){
      alert(`The value cannot be less than zero ${this.state.value}`);
      return
    }
    let num = this.state.value - 1;
    this.setState({value : num});
  }
  // is Odd
  isOdd = num => num % 2;
  // Reset
  reset = ()=>{
    this.setState({value:0});
  };
   
  // Render
  render() {
    return (
      <div className="App">
        <div className="increment">
        <h1>Increment</h1>
       
        <CurrentValue 
        value={this.state.value} 
        reset={this.reset}
        isOdd={this.isOdd}
        ></CurrentValue>
         <div className="content">
        <IncrementButton increment={this.increment} />
        <DecrementButton decrement={this.decrement} />
        </div>

        </div>
       
      <div className="faces">
      <h2>React-Redux-Component</h2>
        <Faces />
      </div>
       
      </div>
    );
  }
}

export default App;
