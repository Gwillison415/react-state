import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ClickCounter from './ClickCounter'

class App extends Component {
  constructor(props) {
    super(props);

    let countersHolder = Array(this.props.countNum).fill(1);
    for(let i = 0; i < countersHolder.length; i++) {
      countersHolder[i] = i;
    }

    this.state = {
      lastSync: Date.now(),
      lastChildClick: -Infinity,
      countersHolder: countersHolder
    }

    this.synchronize = this.synchronize.bind(this);
    this.setChildClickTime = this.setChildClickTime.bind(this);
  }

  synchronize(){
    let lastSync = Date.now();
    console.log(this.state.lastChildClick);
    this.setState({lastSync})
  }

  setChildClickTime(time){
    // if(typeof time !== 'number') throw new TypeError("you can only pass me a number")
    let lastChildClick = time;
    this.setState({lastChildClick});
  }

  render() {

    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button onClick={this.synchronize}> Sync </button>
        {this.state.countersHolder.map((key) => {
          return <ClickCounter key={key} lastSync={this.state.lastSync} lastSibClickHandle={this.setChildClickTime} lastSibClickTime={this.state.lastChildClick}/>
        })}
      </div>
    );
  }
}

export default App;
