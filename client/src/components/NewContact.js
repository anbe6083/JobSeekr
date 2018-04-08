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
import { bindActionCreators } from 'redux';
// const NewContact = ({dispatch}) => {

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

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onLinkedinChange = this.onLinkedinChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  onLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  onLinkedinChange(e) {
    this.setState({ linkedInUrl: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
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
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.addNewNetworkConnection(this.state);
            }}
          >
            <Row>
              <FirstNameForm
                firstName={this.state.firstName}
                onFirstNameChange={this.onFirstNameChange}
              />
              <LastNameForm
                lastName={this.state.lastName}
                onLastNameChange={this.onLastNameChange}
              />
            </Row>
            <Row>
              <LinkedInForm
                linkedInUrl={this.state.linkedInUrl}
                onLinkedinChange={this.onLinkedinChange}
              />
              <EmailForm
                email={this.state.email}
                onEmailChange={this.onEmailChange}
              />
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
          </form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newContact: state
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addNewNetworkConnection: addNewNetworkConnection },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
