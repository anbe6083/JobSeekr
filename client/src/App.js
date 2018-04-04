import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from 'react-dazzle';

// Your widget. Just another react component.
import DoughnutChart from './components/widgets/DoughnutChart';
import BarChart from './components/widgets/Bar';
import CompanyBar from './components/widgets/CompanyBar';
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
        <Router>
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
        </Router>

        {/* <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem
            userView
            user={{
              background: 'img/office.jpg',
              image: 'img/yuna.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">
            Dashboard
          </SideNavItem>
          <SideNavItem href="#!second">Companies I'm Interested In</SideNavItem>
          <SideNavItem href="#!second">People I've Networked With</SideNavItem>
          <SideNavItem href="#!third">Application Statuses</SideNavItem>
        </SideNav> */}
      </div>
    );
  }
}

export default App;
