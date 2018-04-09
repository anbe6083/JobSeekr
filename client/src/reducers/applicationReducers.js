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
  console.log(state);
  switch (action.type) {
    case 'ADD_NEW_APPLICATION':
      return [
        ...state,
        {
          applicationId: action.application.applicationId,
          company: action.application.company,
          position: action.application.position,
          dateSubmitted: action.application.dateSubmitted,
          applicationUrl: action.application.applicationUrl,
          applicationStatus: action.application.applicationStatus,
          resumeUsed: 'Placeholder'
        }
      ];
    case 'EDIT_APPLICATION':
      const index = state.findIndex(
        application =>
          application.applicationId === action.application.applicationId
      );
      console.log(action.application.newApplicationStatus);
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          applicationStatus: action.application.newApplicationStatus,
          resumeUsed: 'Placeholder'
        },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default applicationReducer;
