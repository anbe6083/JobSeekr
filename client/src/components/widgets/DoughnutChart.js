import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { getRandomInt } from './util';

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

  // componentDidMount() {
  //   const refreshIntervalId = setInterval(() => {
  //     this.state.data[0].value = getRandomInt(0, 40);
  //     this.setState({
  //       data: this.state.data,
  //       refreshIntervalId
  //     });
  //   }, 2000);
  // }

  componentWillUnmount() {
    clearInterval(this.state.refreshIntervalId);
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.data}
          options={{ animationEasing: 'easeInSine', showTooltips: true }}
          height="200"
          width="350"
        />
      </div>
    );
  }
}

export default DoughnutChart;
