import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from 'react-dazzle';
import CompanyTree from './components/widgets/CompanyTree';
// Your widget. Just another react component.
import DoughnutChart from './components/widgets/DoughnutChart';
import BarChart from './components/widgets/Bar';
import CompanyBar from './components/widgets/CompanyBar';
import People_Cards from './components/People_Cards';
import NavBar from './components/NavBar';
// Default styles.
import 'react-dazzle/lib/style/style.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { SideNav, SideNavItem, Button } from 'react-materialize';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Dashboard
                  widgets={this.state.widgets}
                  layout={this.state.layout}
                />
              )}
            />
            <Route path="/companies" component={() => <CompanyTree />} />
            <Route path="/people" component={() => <People_Cards />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
