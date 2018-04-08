import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class LinkedInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedinUrl: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ linkedinUrl: e.target.value });
    this.props.onLinkedinChange(e);
  }

  render() {
    return (
      <Input
        placeholder="LinkedIn URL"
        s={6}
        label="LinkedIn URL"
        onChange={this.onChange}
      />
    );
  }
}
