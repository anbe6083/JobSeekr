import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
class People_Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myNetwork: [
        {
          name: 'Software Engineer',
          position: 'CTO',
          linkedinUrl: 'http://www.linkedin.com/fake',
          phoneNumber: '661-111-2222',
          lastContactDate: '11/22/2017'
        }
      ]
    };
  }

  render() {
    const cardStyle = {
      'max-height': '200px',
      height: '50%',
      width: '50%'
    };
    return (
      <div>
        <h1>Connections</h1>
        <Modal
          header="Modal Header"
          trigger={
            <Button waves="light">
              Add a New Connection
              <i className="material-icons">person_add</i>
            </Button>
          }
        >
          <Row>
            <Input placeholder="First Name" s={6} label="First Name" />
            <Input s={6} placeholder="Last Name" label="Last Name" />
          </Row>
          <Row>
            <Input type="" label="LinkedIn" s={6} />
            <Input type="email" label="Email" s={12} />
          </Row>
          <label>Date Contacted:</label>
          <Row>
            <Input
              name="on"
              type="date"
              onClick={() => (
                <Modal>
                  {' '}
                  <Input
                    name="on"
                    type="date"
                    onChange={function(e, value) {}}
                  />
                </Modal>
              )}
            />
          </Row>
          <Button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </Button>
        </Modal>

        <br />
        <br />
        {this.state.myNetwork.map(person => {
          return (
            <Card
              id={person.name}
              header={
                <CardTitle
                  reveal
                  image={require('../icons/businessman.png')}
                  waves="light"
                />
              }
              title="Joe Doe"
              reveal={
                <p>
                  Position: {person.position}
                  <br />
                  LinkedIn: {person.linkedinUrl}
                  <br />
                  Phone Number: {person.phoneNumber}
                  <br />
                  Last Contacted: {person.lastContactDate}
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

export default People_Cards;
