import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <SideNav
          trigger={
            <Button className="left">
              <i className="large material-icons">arrow_right</i>
            </Button>
          }
          options={{ closeOnClick: true }}
          className="offset-s1"
        >
          <SideNavItem
            userView
            user={{
              background: require('../icons/coffee_and_computer.jpg'),
              image: require('../icons/aberumen.jpeg'),
              name: 'Andrew Berumen',
              email: 'andrewberumen1991@fake.com'
            }}
          />
          <SideNavItem href="/" icon="cloud">
            Dashboard
          </SideNavItem>
          <SideNavItem href="/companies" icon="people">
            Companies
          </SideNavItem>
          <SideNavItem href="/people" icon="comment">
            People I'm Speaking To
          </SideNavItem>
          <SideNavItem href="/applications" icon="drafts">
            Applications Sent
          </SideNavItem>
        </SideNav>
      </div>
    );
  }
}
