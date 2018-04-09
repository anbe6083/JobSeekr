import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import NewApplication from './NewApplication';
import { connect } from 'react-redux';
class ApplicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myApplications: []
    };
  }

  populateApplications() {
    return this.props.myApplications.myApplications.map(application => {
      return (
        <tr>
          <td>{application.company}</td>
          <td>{application.position}</td>
          <td>{application.dateSubmitted}</td>
          <td>
            <a href={application.applicationUrl}>Application URL</a>
          </td>
          <td>{application.applicationStatus}</td>
          <td>{application.resumeUsed}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>My Applications</h1>
        <Table responsive={true} centered={true} hoverable={true}>
          <thead>
            <tr>
              <th data-field="company">Company</th>
              <th data-field="position">Position</th>
              <th data-field="name">Date Submitted</th>
              <th data-field="appUrl">Application URL</th>
              <th data-field="appUrl">Application Status</th>
              <th data-field="appUrl">Resume Used</th>
            </tr>
          </thead>

          <tbody>{this.populateApplications()}</tbody>
        </Table>
        <NewApplication />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myApplications: state };
}

export default connect(mapStateToProps)(ApplicationList);
