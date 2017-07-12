import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './clickCounter';

class App extends Component {
  constructor(props) {
    super(props);
    let countersholder = Array(this.props.countNum).fill(1);
    for (var i = 0; i < countersholder.length; i++) {
      countersholder[i] =i;
    }
    this.state = {
      lastSync: Date.now(),
      lastChildClick: {
        timeStamp: -Infinity,
      }
    };
  }
  synchronize() {
    let lastSync = Date.Now();
    this.setState({lastSync});
  }
  setChilckTime(time){
    if(typeof time !== 'number') throw new TypeErrpr("you can only pass me a number")
    let lastChildClick =time;
    this.setState({lastChildClick});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={() => this.synchronize}> Sync </button>
        <Counter lastSync = {this.state.lastSync} lastSibClick={this.state.lastChildClick} last/>
        <Counter lastSync = {this.state.lastSync}/>
        <Counter lastSync = {this.state.lastSync}/>
        <Counter lastSync = {this.state.lastSync}/>
      </div>
    );
  }
}

export default App;
