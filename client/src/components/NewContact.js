import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
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
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNewNetworkConnection(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      linkedInUrl: '',
      email: '',
      date: ''
    });
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
          <form onSubmit={this.onSubmit}>
            <Row>
              <Input
                placeholder="First Name"
                s={6}
                label="First Name"
                onChange={this.onChange}
                name="firstName"
              />
              <Input
                placeholder="Last Name"
                s={6}
                label="Last Name"
                onChange={this.onChange}
                name="lastName"
              />
            </Row>
            <Row>
              <Input
                placeholder="LinkedIn URL"
                s={6}
                label="LinkedIn URL"
                onChange={this.onChange}
                name="linkedInUrl"
              />
              <Input
                placeholder="Email"
                s={6}
                label="Email"
                onChange={this.onChange}
                name="email"
              />
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
