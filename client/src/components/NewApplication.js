import React, { Component } from 'react';
import { Modal, Button, Input, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { addNewApplication } from '../actions/applicationActions';
import { bindActionCreators } from 'redux';

class NewApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      dateSubmitted: '',
      applicationUrl: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Modal
          header="Add A New Application"
          trigger={
            <Button waves="light">
              +
              <i className="material-icons">person_add</i>
            </Button>
          }
        >
          <form onSubmit={this.onSubmit}>
            <Row>
              <Input
                placeholder="Company"
                s={6}
                label="Company"
                onChange={this.onChange}
                name="company"
              />
              <Input
                placeholder="Position"
                s={6}
                label="Position"
                onChange={this.onChange}
                name="position"
              />
            </Row>
            <Row>
              <Input
                placeholder="Application URL"
                s={6}
                label="Application URL"
                onChange={this.onChange}
                name="applicationUrl"
              />
            </Row>
            <Row>
              <label>Date Submitted:</label>
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
            </Row>
            <Row />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addNewApplication: addNewApplication }, dispatch);
};

export default connect(mapDispatchToProps)(NewApplication);
