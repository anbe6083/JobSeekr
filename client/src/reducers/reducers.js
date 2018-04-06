import { ADD_NEW_PERSON_TO_NETWORK } from '../actions/networkActions';
import { combineReducers } from 'redux';

const initialState = {
  userNetwork: [
    {
      name: 'John Doe',
      position: 'CTO',
      linkedinUrl: 'http://www.linkedin.com/fake',
      phoneNumber: '661-111-2222',
      lastContactDate: '11/22/2017',
      photo: require('../icons/businessman.png'),
      email: 'fake@fake.com'
    },
    {
      name: 'Andrew Berumen',
      position: 'CEO',
      linkedinUrl: 'https://www.linkedin.com/in/andrewberumen/',
      phoneNumber: '123-456-7890',
      lastContactDate: '11/22/2017',
      photo: require('../icons/aberumen.jpeg'),
      email: 'fake@fake.com'
    }
  ]
};

function myNetworkReducer() {
  return [
    {
      name: 'John Doe',
      position: 'CTO',
      linkedinUrl: 'http://www.linkedin.com/fake',
      phoneNumber: '661-111-2222',
      lastContactDate: '11/22/2017',
      photo: require('../icons/businessman.png'),
      email: 'fake@fake.com'
    },
    {
      name: 'Andrew Berumen',
      position: 'CEO',
      linkedinUrl: 'https://www.linkedin.com/in/andrewberumen/',
      phoneNumber: '123-456-7890',
      lastContactDate: '11/22/2017',
      photo: require('../icons/aberumen.jpeg'),
      email: 'fake@fake.com'
    }
  ];
}

// function myNetworkReducer(state = initialState, action) {
//   switch (action) {
//     case 'ADD_NEW_PERSON_TO_NETWORK':
//       return [
//         ...state,
//         {
//           firstName: '',
//           lastName: '',
//           linkedInUrl: '',
//           email: '',
//           date: ''
//         }
//       ];
//     default:
//       return state;
//   }
// }

export default myNetworkReducer;
