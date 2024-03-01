import React, { Component } from 'react'

import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count: 0,
    }
    this.incre=this.incre.bind(this);
    this.decre=this.decre.bind(this);
  }
  incre(){
    this.setState(prev=>({
      count: prev.count+1
    }));
  }
  decre(){
    this.setState(prev=>({
      count: prev.count-1,
    }));
  }
  render(){
    return(
      <>
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.incre}>Increment</button>
      <button onClick={this.decre}>Decrement</button>
      </>
    )
  }
}

export default App
