import React, { useState } from 'react';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import './App.css';

class App extends React.Component {


  constructor() {
    super()
    this.state = {
      balls: 0,  // -> "1"
      strikes: 0
    };
  }

  // increaseStrikes = (currentStrikes) => {
  //   return currentStrikes + 1
  // }

  countRules = (isStrike, isBall, isFoul, isHit) => {

    // console.log(isStrike, isBall, isFoul, isHit)
    if(isStrike) {
      this.setState({strikes: this.state.strikes + 1})
      // test passed
      if(this.state.strikes === 2) {
        this.setState({balls: 0, strikes: 0})


      }

    }
    else if(isBall) {
      this.setState({balls: this.state.balls + 1})
      if(this.state.balls === 3) {
        this.setState({balls: 0, strikes: 0})
  
      }
    }
    else if(isHit) {
      this.setState({balls: 0, strikes: 0})

    }
    else if(isFoul) {
      if(this.state.strikes === 0) {
        this.setState({strikes: 1})
      }
      else if(this.state.strikes === 1) {
        this.setState({strikes: 2})
      }
    }
    console.log(this.state)

    
  }

  render() {
    return (
      <div className="App">
        <Dashboard countRules={this.countRules}/>
        <Display player={this.state}/>
      </div>
    );
  }
  
}

export default App;
