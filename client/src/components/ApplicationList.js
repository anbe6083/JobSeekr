import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import NewApplication from './NewApplication';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { bindActionCreators } from 'redux';

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
          <td>{application.dateSubmitted.format('DD/MM/YYYY')}</td>
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
                console.log(e.target.value);
                application.applicationStatus = e.target.value;
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

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     { addNewNetworkConnection: addNewNetworkConnection },
//     dispatch
//   );
// };

export default connect(mapStateToProps)(ApplicationList);
