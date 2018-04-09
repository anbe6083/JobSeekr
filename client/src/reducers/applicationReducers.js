import moment from 'moment';

import {
  ADD_NEW_APPLICATION,
  EDIT_APPLICATION
} from '../actions/applicationActions';

let applicationId = 3;
const initialState = [
  {
    applicationId: 0,
    company: 'Facebook',
    position: 'Software Engineer',
    dateSubmitted: moment(),
    applicationUrl: 'facebook.com',
    applicationStatus: 'Applied',
    resumeUsed: 'Placeholder'
  },
  {
    applicationId: 1,
    company: 'Twitter',
    position: 'Data Analyst',
    dateSubmitted: moment(),
    applicationUrl: 'twitter.com',
    applicationStatus: 'Rejected',
    resumeUsed: 'Placeholder'
  },
  {
    applicationId: 2,
    company: 'Instagram',
    position: 'Senior Software Engineer',
    dateSubmitted: moment(),
    applicationUrl: 'www.instagram.com',
    applicationStatus: 'First Interview',
    resumeUsed: 'Placeholder'
  }
];

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_APPLICATION':
      return [...state, action.application];
    default:
      return state;
  }
};

export default applicationReducer;
