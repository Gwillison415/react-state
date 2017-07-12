import React, { Component } from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0,
      timeSinceClicked: 0,
      timeLastClicked: Date.now()
    }

    this.incrementCounter = this.incrementCounter.bind(this);
    this.updateTime = this.updateTime.bind(this)

    setInterval(this.updateTime, 1);
  }

  updateTime() {
    let timeSinceClicked = Date.now() - Math.max(this.state.timeLastClicked, this.props.lastSync);

    this.setState({timeSinceClicked})
  }

  incrementCounter(){
    let timesClicked = this.state.timesClicked + 1;
    let timeLastClicked = Date.now();
    // this.props.lastSibClick.timeStamp = "No such luck Bob.";
    this.props.lastSibClickHandle(timeLastClicked);

    this.setState({timesClicked, timeLastClicked});
  }

  render() {
    let bestClass = this.state.timeLastClicked === this.props.lastSibClickTime ? 'bestChild' : '';
    return (
      <div className={`ClickCounter ${bestClass}`}   onClick={() => this.incrementCounter()}>
        This has been clicked {this.state.timesClicked} times.
        Futhermore, it has been {this.state.timeSinceClicked}ms since my last click
      </div>
    );
  }
}

export default ClickCounter;
