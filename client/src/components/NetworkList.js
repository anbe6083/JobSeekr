import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
import NewContact from './NewContact';
//react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import networkActions, {
  addNewNetworkConnection
} from '../actions/networkActions';

const cardStyle = {
  // 'max-height': '200px'
  height: '50%',
  width: '50%'
};

class NetworkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myNetwork: []
    };
  }

  render() {
    const cardStyle = {
      // 'max-height': '200px'
      height: '50%',
      width: '50%'
    };
    console.log(this.props);
    return (
      <div>
        <h1>Connections</h1>
        <NewContact />
        <br />
        <br />
        {this.props.myNetwork.map(person => {
          console.log(person);
          return (
            <Card
              id={person.name}
              header={<CardTitle reveal image={person.photo} waves="light" />}
              title={person.firstName + ' ' + person.lastName}
              reveal={
                <p>
                  Position: {person.position}
                  <br />
                  LinkedIn:
                  <a href={person.linkedInUrl}>{person.linkedInUrl}</a>
                  <br />
                  Phone Number: {person.phoneNumber}
                  <br />
                  Last Contacted: {person.lastContactDate}
                  <br />
                  Email: <a href={'mailto:' + person.email}>{person.email}</a>
                </p>
              }
              style={cardStyle}
            >
              <a href={person.linkedInUrl}>LinkedIn</a>
            </Card>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myNetwork: state.myNetwork
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addNewNetworkConnection: addNewNetworkConnection },
    dispatch
  );
  addNewNetworkConnection: dispatch;
}

export default connect(mapStateToProps)(NetworkList);
