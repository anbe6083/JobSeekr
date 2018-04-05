import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
import FirstNameForm from './FirstNameForm';
import LastNameForm from './LastNameForm';
import LinkedInForm from './LinkedInForm';
import EmailForm from './EmailForm';
import DatePickerForm from './DatePickerForm';
export default class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      linkedInUrl: '',
      email: '',
      date: ''
    };
  }

  render() {
    return (
      <div>
        <Modal
          header="Modal Header"
          trigger={
            <Button waves="light">
              Add a New Connection
              <i className="material-icons">person_add</i>
            </Button>
          }
        >
          <Row>
            <FirstNameForm />
            <LastNameForm />
          </Row>
          <Row>
            <LinkedInForm />
            <EmailForm />
          </Row>
          <label>Date Contacted:</label>
          <Row>
            {/* <Input
              name="date"
              type="date"
              onClick={() => (
                <Modal>
                  {' '}
                  <Input
                    name="on"
                    type="date"
                    onChange={function(e, value) {
                      alert(e);
                    }}
                  />
                </Modal>
              )}
            /> */}
            <DatePickerForm />
          </Row>
          <Button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </Button>
        </Modal>
      </div>
    );
  }
}
