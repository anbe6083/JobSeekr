import moment from 'moment';

import {
  ADD_NEW_APPLICATION,
  EDIT_APPLICATION
} from '../actions/applicationActions';

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
  console.log(action.applicationId);
  switch (action.type) {
    case 'ADD_NEW_APPLICATION':
      return [
        ...state,
        {
          applicationId: action.applicationId,
          company: action.application.company,
          position: action.application.position,
          dateSubmitted: action.application.dateSubmitted,
          applicationUrl: action.application.applicationUrl,
          applicationStatus: action.application.applicationStatus,
          resumeUsed: 'Placeholder'
        }
      ];
    case 'EDIT_APPLICATION':
      return Object.assign([], this.state.find());
    default:
      return state;
  }
};

export default applicationReducer;
