import React, { Component } from 'react';
import { Modal, Button, Input, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { addNewApplicationToServer } from '../actions/applicationActions';
import {
  incrementApplicationAmount,
  changeApplicationStatusAmount
} from '../actions/dashboardActions';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
class NewApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      dateSubmitted: moment(),
      applicationUrl: '',
      applicationStatus: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDateChange(date) {
    this.setState({ dateSubmitted: date });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNewApplicationToServer(this.state);
    this.props.incrementApplicationAmount(this.state);

    // this.setState({
    //   company: '',
    //   position: '',
    //   dateSubmitted: moment(),
    //   applicationUrl: '',
    //   applicationStatus: ''
    // });
  }

  render() {
    return (
      <div>
        <Modal
          header="Add A New Application"
          trigger={
            <Button
              floating
              waves="light"
              faicon="fa fa-plus"
              className="red"
              icon="add"
              large
              // style={{ bottom: '45px', right: '24px' }}
            />
          }
        >
          <form onSubmit={this.onSubmit}>
            <Row>
              <label>Date Submitted:</label>
              <DatePicker
                selected={this.state.dateSubmitted}
                onChange={this.onDateChange}
              />
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
              <Input
                s={12}
                type="select"
                label="Application Status"
                icon="assignment"
                name="applicationStatus"
                onChange={this.onChange}
              >
                <option value="Applied">Applied</option>
                <option value="Rejected">Rejected</option>
                <option value="First Interview">First Interview</option>
                <option value="Second Interview">Second Interview</option>
                <option value="Third Interview">Third Interview</option>
                <option value="Offer">Offer</option>
              </Input>
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

function mapStateToProps(state) {
  return {
    newApplication: state
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewApplicationToServer: addNewApplicationToServer,
      incrementApplicationAmount: incrementApplicationAmount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewApplication);
