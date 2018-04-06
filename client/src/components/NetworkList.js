import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
import NewContact from './NewContact';
import { connect } from 'react-redux';
const cardStyle = {
  // 'max-height': '200px'
  height: '50%',
  width: '50%'
};

class NetworkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myNetwork: [
        // {
        //   name: 'John Doe',
        //   position: 'CTO',
        //   linkedinUrl: 'http://www.linkedin.com/fake',
        //   phoneNumber: '661-111-2222',
        //   lastContactDate: '11/22/2017',
        //   photo: require('../icons/businessman.png'),
        //   email: 'fake@fake.com'
        // },
        // {
        //   name: 'Andrew Berumen',
        //   position: 'CEO',
        //   linkedinUrl: 'https://www.linkedin.com/in/andrewberumen/',
        //   phoneNumber: '123-456-7890',
        //   lastContactDate: '11/22/2017',
        //   photo: require('../icons/aberumen.jpeg'),
        //   email: 'fake@fake.com'
        // }
      ]
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
          return (
            <Card
              id={person.name}
              header={<CardTitle reveal image={person.photo} waves="light" />}
              title={person.name}
              reveal={
                <p>
                  Position: {person.position}
                  <br />
                  LinkedIn:{' '}
                  <a href={person.linkedinUrl}>{person.linkedinUrl}</a>
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
              <p>
                <a href={person.linkedinUrl}>LinkedIn</a>
              </p>
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

export default connect(mapStateToProps)(NetworkList);
