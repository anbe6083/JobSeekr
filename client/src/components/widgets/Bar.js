import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { populateArrayOfApplicationMonths } from '../../actions/dashboardActions';
class ApplicationBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationStatus: [
        'First Interview',
        'Second Interview',
        'Third Interview',
        'Applied',
        'Rejected',
        'Offer'
      ],
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
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: 'Rejected',
            backgroundColor: '#7B2D26',
            borderColor: '#7B2D26',
            borderWidth: 1,
            hoverBackgroundColor: '#4C1C17',
            hoverBorderColor: '#4C1C17',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: 'Offer',
            backgroundColor: '#23CE6B',
            borderColor: '#23CE6B',
            borderWidth: 1,
            hoverBackgroundColor: '#1BA354',
            hoverBorderColor: '#1BA354',
            data: [0]
          },
          {
            label: 'First Interview',
            backgroundColor: '#3D5467',
            borderColor: '#3D5467',
            borderWidth: 1,
            borderColor: '#3D5467',
            hoverBackgroundColor: '#3D5467',
            borderColor: '#3D5467',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0]
          },
          {
            label: 'Second Interview',
            backgroundColor: '#F2BB05',
            borderColor: '#F2BB05',
            borderWidth: 1,
            borderColor: '#F2BB05',
            hoverBackgroundColor: '#F2BB05',
            borderColor: '#F2BB05',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0]
          },
          {
            label: 'Third Interview',
            backgroundColor: '#DF367C',
            borderColor: '#DF367C',
            borderWidth: 1,
            borderColor: '#DF367C',
            hoverBackgroundColor: '#DF367C',
            borderColor: '#DF367C',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0]
          }
        ]
      }
    };
    this.sumApplicationStatus = this.sumApplicationStatus.bind(this);
  }

  sumApplicationStatus = async (arrayOfMonths, status) => {
    let result = await arrayOfMonths.map(async application => {
      // console.log(await application);
      return await application[status];
    });

    Promise.all(result)
      .then(completed => {
        console.log(completed);
        const stateObj = this.state.data.datasets.find(dataset => {
          return dataset.label === status;
        });
        this.setState({
          data: {
            datasets: [
              {
                label: 'Applied',
                backgroundColor: '#006BA6',
                borderColor: '#006BA6',
                borderWidth: 1,
                hoverBackgroundColor: '#004266',
                hoverBorderColor: '#004266',
                data: [0]
              },
              {
                label: 'Rejected',
                backgroundColor: '#7B2D26',
                borderColor: '#7B2D26',
                borderWidth: 1,
                hoverBackgroundColor: '#4C1C17',
                hoverBorderColor: '#4C1C17',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              },
              {
                label: 'Offer',
                backgroundColor: '#23CE6B',
                borderColor: '#23CE6B',
                borderWidth: 1,
                hoverBackgroundColor: '#1BA354',
                hoverBorderColor: '#1BA354',
                data: [0]
              },
              {
                label: 'First Interview',
                backgroundColor: '#3D5467',
                borderColor: '#3D5467',
                borderWidth: 1,
                borderColor: '#3D5467',
                hoverBackgroundColor: '#3D5467',
                borderColor: '#3D5467',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: completed
              },
              {
                label: 'Second Interview',
                backgroundColor: '#F2BB05',
                borderColor: '#F2BB05',
                borderWidth: 1,
                borderColor: '#F2BB05',
                hoverBackgroundColor: '#C6B9CD',
                borderColor: '#C6B9CD',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [0]
              },
              {
                label: 'Third Interview',
                backgroundColor: '#F2BB05',
                borderColor: '#F2BB05',
                borderWidth: 1,
                borderColor: '#F2BB05',
                hoverBackgroundColor: '#DF367C',
                borderColor: '#DF367C',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [0]
              }
            ]
          }
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
    // return result;
  };

  async componentDidMount() {
    const list = await axios.get('/applications/list');
    this.props.populateArrayOfApplicationMonths(list);
    // this.state.applicationStatus.forEach(async status => {
    //   const newData = await this.sumApplicationStatus(
    //     this.props.applicationBarChart.dashboardReducers
    //       .numberOfApplicationsPerMonth,
    //     status
    //   );
    // });
    const newData = await this.sumApplicationStatus(
      this.props.applicationBarChart.dashboardReducers
        .numberOfApplicationsPerMonth,
      'First Interview'
    );
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

const mapStateToProps = state => {
  return {
    applicationBarChart: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { populateArrayOfApplicationMonths: populateArrayOfApplicationMonths },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationBarChart
);
