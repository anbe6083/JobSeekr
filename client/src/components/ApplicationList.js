import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import NewApplication from './NewApplication';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { changeApplicationStatusAmount } from '../actions/dashboardActions';
import {
  editApplication,
  addNewApplication
} from '../actions/applicationActions';
import axios from 'axios';
import moment from 'moment';
const tdStyling = {
  cursor: 'pointer'
};

class ApplicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myApplications: [],
      headers: [
        {
          headerName: 'Company',
          dataField: 'company'
        },
        {
          headerName: 'Position',
          dataField: 'position'
        },
        {
          headerName: 'Date Submitted',
          dataField: 'dateSubmitted'
        },
        {
          headerName: 'Application URL',
          dataField: 'appUrl'
        },
        {
          headerName: 'Application Status',
          dataField: 'appStatus'
        },
        {
          headerName: 'Resume Used',
          dataField: 'resumeUsed'
        }
      ]
    };
  }

  async componentDidMount() {
    const list = await axios.get('/applications/list');
    // console.log(this.props);
    list.data.forEach(application => {
      // console.log(this.props);
      this.props.addNewApplication(application);
    });
  }

  populateTableHeader() {
    return (
      <thead>
        <tr>
          {this.state.headers.map(header => {
            return (
              <th key={header.dataField} data-field={header.dataField}>
                {header.headerName}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  populateApplications() {
    return this.props.myApplications.myApplications.map(application => {
      return (
        <tr key={application.applicationId}>
          <td>{application.company}</td>
          <td>{application.position}</td>
          {/* <td>{application.dateSubmitted.format('MM/DD/YYYY')}</td> */}
          {typeof application.dateSubmitted === 'object' ? (
            <td>{application.dateSubmitted.format('MM/DD/YYYY')}</td>
          ) : (
            <td>{application.dateSubmitted}</td>
          )}
          {/* <td>{application.dateSubmitted.toString()}</td> */}
          <td>
            <a href={application.applicationUrl}>Application URL</a>
          </td>
          <td>
            <Input
              s={12}
              type="select"
              label="Application Status"
              name="applicationStatus"
              onChange={e => {
                this.props.editApplication({
                  applicationId: application.applicationId,
                  company: application.company,
                  position: application.position,
                  dateSubmitted: application.dateSubmitted,
                  applicationUrl: application.applicationUrl,
                  oldApplicationStatus: application.applicationStatus,
                  newApplicationStatus: e.target.value,
                  resumeUsed: 'Placeholder'
                });
              }}
              defaultValue={application.applicationStatus}
            >
              <option value="Applied">Applied</option>
              <option value="Rejected">Rejected</option>
              <option value="First Interview">First Interview</option>
              <option value="Second Interview">Second Interview</option>
              <option value="Third Interview">Third Interview</option>
              <option value="Offer">Offer</option>
            </Input>
          </td>
          <td>{application.resumeUsed}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>My Applications</h1>
        <Table responsive={true} centered={true} hoverable={true}>
          {this.populateTableHeader()}

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editApplication: editApplication,
      addNewApplication: addNewApplication,
      changeApplicationStatusAmount: changeApplicationStatusAmount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationList);
