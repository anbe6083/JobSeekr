import React, { Component } from 'react';
import { Modal, Input } from 'react-materialize';
export default class DatePickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ date: e.target.value });
    alert(this.state.date);
  }

  render() {
    return (
      <Input
        name="date"
        type="date"
        onClick={() => (
          <Modal>
            {' '}
            <Input
              name="on"
              className="datepicker"
              type="date"
              onChange={function(e, value) {
                alert(value);
              }}
            />
          </Modal>
        )}
      />
    );
  }
}
