import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from 'react-dazzle';
import CompanyTree from './components/widgets/CompanyTree';
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
        <SideNav
          trigger={<Button>Menu</Button>}
          options={{ closeOnClick: true }}
          className="offset-s1"
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
          <SideNavItem href="/" icon="cloud">
            Dashboard
          </SideNavItem>
          <SideNavItem href="#!second" icon="people">
            Companies
          </SideNavItem>
          <SideNavItem href="#!second" icon="comment">
            People I'm Speaking To
          </SideNavItem>
          <SideNavItem href="#!third" icon="drafts">
            Applications Sent
          </SideNavItem>
        </SideNav>
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
