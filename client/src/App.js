import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import WizardForm from './components/src/WizardForm';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <WizardForm /> */}
        <SideNav
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
        </SideNav>
      </div>
    );
  }
}

export default App;
