import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DoughnutChart extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ['Rejected', 'Offers', 'Applied', 'Interviews'],
        datasets: [
          {
            data: [300, 50, 100, 3],
            backgroundColor: ['#FF6384', '#4E937A', '#3ABEFF', '#E8E288'],
            hoverBackgroundColor: ['#FF6384', '#4E937A', '#3ABEFF', '#E8E288']
          }
        ]
      }
    };
  }
  componentWillUnmount() {
    clearInterval(this.state.refreshIntervalId);
  }

  render() {
    console.log(this.props);
    let labels = {
      labels: [
        'Rejected',
        'Offers',
        'Applied',
        'First Interview',
        'Second Interview',
        'Third Interview'
      ],
      datasets: [
        {
          data: [
            this.props.doughnut.dashboardReducers.rejected,
            this.props.doughnut.dashboardReducers.offer,
            this.props.doughnut.dashboardReducers.applied,
            this.props.doughnut.dashboardReducers['first interview'],
            this.props.doughnut.dashboardReducers['second interview'],
            this.props.doughnut.dashboardReducers['third interview']
          ],
          backgroundColor: [
            '#FF6384',
            '#4E937A',
            '#3ABEFF',
            '#E8E288',
            '#D5A021',
            '#A49694'
          ],
          hoverBackgroundColor: ['#FF6384', '#4E937A', '#3ABEFF', '#E8E288']
        }
      ]
    };
    return (
      <div>
        <Doughnut
          data={labels}
          options={{
            animationEasing: 'easeInSine',
            showTooltips: true,
            height: '100px'
          }}
          height={25}
          width={100}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    doughnut: state
  };
};

export default connect(mapStateToProps)(DoughnutChart);
