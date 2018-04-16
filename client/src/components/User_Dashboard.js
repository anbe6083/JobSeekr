import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
// Your widget. Just another react component.
import DoughnutChart from './widgets/DoughnutChart';
import BarChart from './widgets/Bar';
import CompanyBar from './widgets/CompanyBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addNewApplication,
  editApplication
} from '../actions/applicationActions';
import { incrementApplicationAmount } from '../actions/dashboardActions';
import axios from 'axios';

import '../styles/style.css';
class User_DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: {
        DoughnutChart: {
          type: DoughnutChart,
          title: 'Applications'
        },
        BarChart: {
          type: BarChart,
          title: 'Bar'
        },
        CompanyBar: {
          type: CompanyBar,
          title: "Companies I'm Networking With"
        }
      },
      layout: {
        rows: [
          {
            columns: [
              {
                className: 'col-md-12',
                widgets: [{ key: 'DoughnutChart' }]
              }
            ]
          },
          {
            columns: [
              {
                className: 'col-md-6',
                widgets: [{ key: 'BarChart' }]
              },
              {
                className: 'col-md-6',
                widgets: [{ key: 'CompanyBar' }]
              }
            ]
          }
        ]
      }
    };
  }

  // async componentDidMount() {
  //   const list = await axios.get('/applications/list');
  //   list.data.forEach(application => {
  //     this.props.incrementAppliedAmount(application);
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Dashboard widgets={this.state.widgets} layout={this.state.layout} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewApplication: addNewApplication,
      editApplication: editApplication,
      incrementApplicationAmount: incrementApplicationAmount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User_DashBoard);
