import { ADD_NEW_APPLICATION } from '../actions/applicationActions';

const initialState = [
  {
    company: 'Facebook',
    position: 'Software Engineer',
    dateSubmitted: '4/3/2018',
    applicationUrl: 'facebook.com',
    applicationStatus: 'Applied',
    resumeUsed: 'Placeholder'
  },
  {
    company: 'Twitter',
    position: 'Data Analyst',
    dateSubmitted: '3/7/2018',
    applicationUrl: 'twitter.com',
    applicationStatus: 'Rejected',
    resumeUsed: 'Placeholder'
  },
  {
    company: 'Instagram',
    position: 'Senior Software Engineer',
    dateSubmitted: '3/12/2018',
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
