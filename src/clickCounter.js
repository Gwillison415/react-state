import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {timesClicked: 0,
      timeSinceClicked: 0,
      timeLastClicked: Date.now()
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.updateTime = this.updateTime.bind(this);
    setInterval(this.updateTime, 1000);
  }
  updateTime() {
    const timeSinceClicked = Date.now() - Math.max(this.state.timeLastClicked, this.props.lastSync);
    this.setState({timeSinceClicked});
  }
  incrementCounter(){

    this.setState({timesClicked : this.state.timesClicked + 1,
    timeSinceClicked: 0 }) //could cause bug, should use callback in the future
    this.props.lastSibClick.timeStamp = timeLastClicked;
    console.log((this.state.timesClicked));
  }
  render() {
    let bestClass = this.state.timeLastClicked === this.props.lastSibClickTime ? 'bestChild' : '' ;
    return (
      <div className={bestClass} onClick={this.incrementCounter}> I have clicked {this.state.timesClicked} times. Futhermore, it has been {this.state.timeSinceClicked} since last click </div>
    );
  }

}

export default Counter;
