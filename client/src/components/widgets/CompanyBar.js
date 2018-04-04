import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Facebook', 'Google', 'Twitter', 'Instagram', 'Microsoft'],
        datasets: [
          {
            label: '# of Employees Contacted',
            backgroundColor: '#2A9D8F',
            borderColor: '#2A9D8F',
            borderWidth: 1,
            hoverBackgroundColor: '#40EDD8',
            hoverBorderColor: '#40EDD8',
            data: [50, 34, 25, 55, 67]
          },
          {
            label: '# of Responses',
            backgroundColor: '#CEB45C',
            borderColor: '#CEB45C',
            borderWidth: 1,
            hoverBackgroundColor: '#F5DD90',
            hoverBorderColor: '#F5DD90',
            data: [3, 7, 2, 3, 9]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h2>Top Companies I'm Networking With</h2>
        <Bar
          data={this.state.data}
          width={100}
          height={25}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            scales: {
              xAxes: [
                {
                  stacked: true
                }
              ],
              yAxes: [
                {
                  stacked: true
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
