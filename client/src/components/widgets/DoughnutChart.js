import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { incrementApplicationAmount } from '../../actions/dashboardActions';
import { editApplication } from '../../actions/applicationActions';
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

  async componentDidMount() {
    const list = await axios.get('/applications/list');
    list.data.forEach(application => {
      this.props.incrementApplicationAmount(application);
    });
  }

  render() {
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
            this.props.doughnut.dashboardReducers.Rejected,
            this.props.doughnut.dashboardReducers.Offer,
            this.props.doughnut.dashboardReducers.Applied,
            this.props.doughnut.dashboardReducers['First Interview'],
            this.props.doughnut.dashboardReducers['Second Interview'],
            this.props.doughnut.dashboardReducers['Third Interview']
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementApplicationAmount: incrementApplicationAmount,
      editApplication: editApplication
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DoughnutChart);
