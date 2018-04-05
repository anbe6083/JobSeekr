import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize';
class People_Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardStyle = {
      'max-height': '200px',
      height: '50%',
      width: '50%'
    };
    return (
      <div>
        <Modal
          header="Modal Header"
          trigger={<Button waves="light">Add a New Connection</Button>}
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
        <Card
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
              Position: Software Engineer
              <br />
              LinkedIn: 'http://www.linkedin.com/fake'
              <br />
              Phone Number: 661-111-2222
              <br />
              Last Contacted: 11/22/2017
            </p>
          }
          style={cardStyle}
        >
          <p>
            <a href="http://www.linkedin.com/fake">LinkedIn</a>
          </p>
        </Card>
      </div>
    );
  }
}

export default People_Cards;
