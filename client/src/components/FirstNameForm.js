import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class FirstNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ firstName: e.target.value });
  }

  render() {
    return (
      <Input
        placeholder="First Name"
        s={6}
        label="First Name"
        onChange={this.onChange}
      />
    );
  }
}
