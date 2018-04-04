import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Applied',
            backgroundColor: '#006BA6',
            borderColor: '#006BA6',
            borderWidth: 1,
            hoverBackgroundColor: '#006BA6',
            hoverBorderColor: '#006BA6',
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            label: 'Rejected',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [10, 20, 30, 40, 50, 60, 70]
          },
          {
            label: 'Offers',
            backgroundColor: '#23CE6B',
            borderColor: '#23CE6B',
            borderWidth: 1,
            hoverBackgroundColor: '#23CE6B',
            hoverBorderColor: '#23CE6B',
            data: [3, 5, 7, 9, 11, 13, 15]
          },
          {
            label: 'Interviews',
            backgroundColor: '#F2BB05',
            borderColor: '#F2BB05',
            borderWidth: 1,
            borderColor: '#F2BB05',
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            borderColor: '#F2BB05',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 4, 6, 8, 10, 12, 14]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h2>Applications (By Month)</h2>
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
