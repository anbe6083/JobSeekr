import React, { Component } from 'react';
import { states } from './states';
export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _validate(e) {
    e.preventDefault();
    let position = this.state.position;
    this.props.next(states.PERKS);
  }
  _back() {
    this.props.back(states.LOCATION);
  }

  handleChange(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    return <div>Position</div>;
  }
}
