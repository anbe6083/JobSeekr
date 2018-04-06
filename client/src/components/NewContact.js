import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
import FirstNameForm from './FirstNameForm';
import LastNameForm from './LastNameForm';
import LinkedInForm from './LinkedInForm';
import EmailForm from './EmailForm';
import DatePickerForm from './DatePickerForm';
import { addNewNetworkConnection } from '../actions/networkActions';
//react-redux
import { connect } from 'react-redux';
class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      linkedInUrl: '',
      email: '',
      date: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ firstName: e.target.value });
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
            <FirstNameForm
              firstName={this.state.firstName}
              onFirstNameChange={this.onChange}
            />
            <LastNameForm lastName={this.state.lastName} />
          </Row>
          <Row>
            <LinkedInForm linkedInUrl={this.state.linkedInUrl} />
            <EmailForm email={this.state.email} />
          </Row>
          <label>Date Contacted:</label>
          <Row>
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

const mapStateToProps = state => {
  myNetwork: addNewNetworkConnection(state.myNetwork, this.state);
};

const mapDispatchToProps = dispatch => {
  {
    addNewNetworkConnection: dispatch(addNewNetworkConnection(this.state));
  }
};

export default connect()(NewContact);
