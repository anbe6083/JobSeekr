import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User_Dashboard from './components/User_Dashboard';
import CompanyTree from './components/widgets/CompanyTree';
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
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Router>
          <div>
            <Route exact path="/" component={() => <User_Dashboard />} />
            <Route path="/companies" component={() => <CompanyTree />} />
            <Route path="/people" component={() => <People_Cards />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
