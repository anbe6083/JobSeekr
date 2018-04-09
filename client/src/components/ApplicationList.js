import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import NewApplication from './NewApplication';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';

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
    return this.state.headers.map(header => {
      return <th data-field={header.dataField}>{header.headerName}</th>;
    });
  }

  populateApplications() {
    return this.props.myApplications.myApplications.map(application => {
      return (
        <tr>
          <td contentEditable={true}>{application.company}</td>
          <td contentEditable={true}>{application.position}</td>
          <td contentEditable={true}>{application.dateSubmitted}</td>
          <td contentEditable={true}>
            <a href={application.applicationUrl}>Application URL</a>
          </td>
          <td
            style={{ cursor: 'pointer' }}
            contentEditable={true}
            onClick={() => {
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
              </Input>;
            }}
          >
            {application.applicationStatus}
          </td>
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
          <thead>{this.populateTableHeader()}</thead>

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
