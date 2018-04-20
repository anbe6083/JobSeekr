import moment from 'moment';

import {
  ADD_NEW_APPLICATION,
  EDIT_APPLICATION
} from '../actions/applicationActions';
import axios from 'axios';
const initialState = [];

const applicationReducer = (state = initialState, action) => {
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
    case 'ADD_NEW_APPLICATION_TO_SERVER':
      axios
        .post('/applications/new', {
          applicationId: action.applicationId,
          company: action.application.company,
          position: action.application.position,
          dateSubmitted: action.application.dateSubmitted.format('MM/DD/YYYY'),
          applicationUrl: action.application.applicationUrl,
          applicationStatus: action.application.applicationStatus
        })
        .then(function(res) {
          // console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
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
    case 'DELETE_APPLICATION':
      axios.post('/api/applications/delete', action.application);
    case 'EDIT_APPLICATION':
      const index = state.findIndex(
        application =>
          application.applicationId === action.application.applicationId
      );
      const newState = [
        ...state.slice(0, index),
        {
          ...state[index],
          applicationStatus: action.application.newApplicationStatus,
          oldApplicationStatus: action.application.oldApplicationStatus,
          resumeUsed: 'Placeholder'
        },
        ...state.slice(index + 1)
      ];
      axios.post('/api/applications/updateApplicationStatus', newState);
      return newState;
    default:
      return state;
  }
};

export default applicationReducer;
