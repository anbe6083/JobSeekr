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
            backgroundColor: '#77878B',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            hoverBackgroundColor: '#A8BEC4',
            hoverBorderColor: '#F1DB4B',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: 'Rejected',
            backgroundColor: '#DE1A1A',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            hoverBackgroundColor: '#4C1C17',
            hoverBorderColor: '#F1DB4B',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: 'Offer',
            backgroundColor: '#5CD668',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            hoverBackgroundColor: '#6DFF7C',
            hoverBorderColor: '#F1DB4B',
            data: [0]
          },
          {
            label: 'First Interview',
            backgroundColor: '#25283D',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            borderColor: '#3D5467',
            hoverBackgroundColor: '#7C85CC',
            borderColor: '#3D5467',
            hoverBorderColor: '#F1DB4B',
            data: [0]
          },
          {
            label: 'Second Interview',
            backgroundColor: '#F1DB4B',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            borderColor: '#F2BB05',
            hoverBackgroundColor: '#FFE74F',
            borderColor: '#F2BB05',
            hoverBorderColor: '#F1DB4B',
            data: [0]
          },
          {
            label: 'Third Interview',
            backgroundColor: '#E08DAC',
            borderColor: '#F1DB4B',
            borderWidth: 1,
            borderColor: '#DF367C',
            hoverBackgroundColor: '#FFA0C3',
            borderColor: '#DF367C',
            hoverBorderColor: '#F1DB4B',
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
        const applicationDatasetToUpdate = { ...this.state.data }.datasets.find(
          dataset => {
            return dataset.label === status;
          }
        );

        const objIndex = { ...this.state.data }.datasets.findIndex(obj => {
          return obj.label === status;
        });

        applicationDatasetToUpdate.data = completed;
        const newDataSet = this.state.data.datasets.slice();
        newDataSet[objIndex] = applicationDatasetToUpdate;
        this.setState({
          ...this.state,
          //bug is right here. Copying new values to datasets array. Slice and update the array
          data: {
            ...this.state.data,
            datasets: newDataSet
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
    // return result;
  };

  async componentDidMount() {
    const list = await axios.get('/applications/list');
    this.props.populateArrayOfApplicationMonths(list);
    this.state.applicationStatus.forEach(async status => {
      const newData = await this.sumApplicationStatus(
        this.props.applicationBarChart.dashboardReducers
          .numberOfApplicationsPerMonth,
        status
      );
    });
    // const newData = await this.sumApplicationStatus(
    //   this.props.applicationBarChart.dashboardReducers
    //     .numberOfApplicationsPerMonth,
    //   'First Interview'
    // );
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
