import React, { Component } from 'react';
import { states } from './states';
export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _validate(e) {
    e.preventDefault();
    let location = this.state.location;
    this.props.next(states.POSITION);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Location:
          <input type="text" value="location" onChange={this.handleChange} />
        </label>
        <button
          value="next"
          onClick={() => {
            this.props.next(states.POSITION);
          }}
        >
          Next
        </button>
      </form>
    );
  }
}
