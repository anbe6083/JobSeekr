import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class LastNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ lastName: e.target.value });
    this.props.onLastNameChange(e);
  }

  render() {
    return (
      <Input
        placeholder="Last Name"
        s={6}
        label="Last Name"
        onChange={this.onChange}
      />
    );
  }
}
