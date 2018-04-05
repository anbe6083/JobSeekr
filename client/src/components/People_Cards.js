import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
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
      <Card
        header={
          <CardTitle
            reveal
            image={require('../icons/businessman.png')}
            waves="light"
          />
        }
        title="Card Title"
        reveal={
          <p>
            Linkedin: 'http://www.linkedin.com/fake'
            <br />
            Phone Number: 661-111-2222
            <br />
            Last Contacted: 11/22/2017
          </p>
        }
        style={cardStyle}
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
    );
  }
}

export default People_Cards;
