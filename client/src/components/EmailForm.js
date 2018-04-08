import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ email: e.target.value });
    this.props.onEmailChange(e);
  }

  render() {
    return (
      <Input
        placeholder="Email"
        s={12}
        label="Email"
        onChange={this.onChange}
      />
    );
  }
}
