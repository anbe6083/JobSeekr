import React, { Component } from 'react';
import { states } from './states';
export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _validate(e) {
    e.preventDefault();
    let value = this.state.value;
    this.props.next(states.REMOTE);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.props.currentState !== 1) return null;
    return (
      <form>
        <label>
          Perks:
          <input type="text" value="perks" onChange={this.handleChange} />
        </label>
        <button onClick={this._validate} />
      </form>
    );
  }
}
