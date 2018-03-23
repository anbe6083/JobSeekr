import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { states } from './states';
export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: states.LOCATION,
      location: '',
      jobPosition: '',
      perks: '',
      remote: false
    };

    // this._next = this._next.bind(this);
    // this._prev = this._prev.bind(this);
  }

  _next(data) {
    //data is the user input from the form
    let currentStep = this.state.currentStep;
    this.setState({ currentStep: states.POSITION });
  }

  _currentStep() {
    console.log(this.state.currentStep);
    switch (this.state.currentStep) {
      case states.LOCATION: {
        return <Step1 next={this._next} />;
      }
      case states.POSITION: {
        return <Step2 />;
      }
      // case states.PERKS: {
      //   return <Step3 />;
      // }
      // case states.REMOTE: {
      //   return <Step3 />;
      // }
      default:
        return <div>hello </div>;
    }
  }

  // _prev() {
  //   let currentStep = this.state.currentStep;
  //   if (currentStep <= 1) {
  //     currentStep = 1;
  //   } else {
  //     currentStep--;
  //   }

  //   this.setState({ currentStep });
  // }

  render() {
    return (
      <div>
        {this._currentStep()}
        {/* <Step1 />
        <button onClick={this._next}>Next</button>
        <button onClick={this._prev}>Prev</button> */}
      </div>
    );
  }
}
