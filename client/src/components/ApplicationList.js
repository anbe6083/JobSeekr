import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import NewApplication from './NewApplication';
export default class ApplicationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Facebook</td>
              <td>Software Engineer</td>
              <td>12/11/2018</td>
              <td>
                <a href="https://www.facebook.com/careers/">Job Listing</a>
              </td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td>Software Engineer</td>
              <td>5/11/2018</td>
              <td>
                <a href="https://careers.twitter.com/en.html">Job Listing</a>
              </td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>Software Engineer</td>
              <td>12/19/2011</td>
              <td>
                <a href="https://careers.microsoft.com/us/en/">Job Listing</a>
              </td>
            </tr>
          </tbody>
          <NewApplication />
        </Table>
      </div>
    );
  }
}
