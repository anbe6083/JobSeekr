import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from 'react-dazzle';

// Your widget. Just another react component.
import DoughnutChart from './components/widgets/DoughnutChart';

// Default styles.
import 'react-dazzle/lib/style/style.css';

import { SideNav, SideNavItem, Button } from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: {
        DoughnutChart: {
          type: DoughnutChart,
          title: 'Doughnut Chart'
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
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Dashboard widgets={this.state.widgets} layout={this.state.layout} />
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
