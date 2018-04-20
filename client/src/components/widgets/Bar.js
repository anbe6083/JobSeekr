import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ApplicationBarChart extends Component {
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
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Applied',
            backgroundColor: '#006BA6',
            borderColor: '#006BA6',
            borderWidth: 1,
            hoverBackgroundColor: '#004266',
            hoverBorderColor: '#004266',
            data: this.props.applicationBarChart.dashboardReducers
              .numberOfApplicationsPerMonth
          },
          {
            label: 'Rejected',
            backgroundColor: '#7B2D26',
            borderColor: '#7B2D26',
            borderWidth: 1,
            hoverBackgroundColor: '#4C1C17',
            hoverBorderColor: '#4C1C17',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
          },
          {
            label: 'Offers',
            backgroundColor: '#23CE6B',
            borderColor: '#23CE6B',
            borderWidth: 1,
            hoverBackgroundColor: '#1BA354',
            hoverBorderColor: '#1BA354',
            data: [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]
          },
          {
            label: 'Interviews',
            backgroundColor: '#F2BB05',
            borderColor: '#F2BB05',
            borderWidth: 1,
            borderColor: '#F2BB05',
            hoverBackgroundColor: '#C99B04',
            borderColor: '#C99B04',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 4, 6, 8, 10, 12, 14]
          }
        ]
      }
    };
  }

  render() {
    console.log();
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

const mapStateToProps = state => {
  return {
    applicationBarChart: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationBarChart
);
