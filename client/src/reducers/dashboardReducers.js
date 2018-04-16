//intiialState for dashboard
const initialState = {
  Applied: 0,
  Rejected: 0,
  'First Interview': 0,
  'Second Interview': 0,
  'Third Interview': 0,
  Offer: 0
};

//actions for dashboard charts

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_APPLIED':
      return {
        ...state,
        Applied: state.Applied + 1
      };
    case 'INCREMENT_FIRST_INTERVIEW':
      return {
        ...state,
        'First Interview': state['First Interview'] + 1
      };
    case 'INCREMENT_REJECTED':
      return {
        ...state,
        Rejected: state.Rejected + 1
      };
    case 'INCREMENT_SECOND_INTERVIEW':
      return {
        ...state,
        'Second Interview': state['Second Interview'] + 1
      };
    case 'INCREMENT_THIRD_INTERVIEW':
      return {
        ...state,
        'Third Interview': state['Third Interview'] + 1
      };
    case 'EDIT_APPLICATION':
      const oldApplicationStatus = action.application.oldApplicationStatus;
      const newApplicationStatus = action.application.newApplicationStatus;
      const newState = {
        ...state
      };
      newState[oldApplicationStatus] = state[oldApplicationStatus]--;
      newState[newApplicationStatus] = state[newApplicationStatus]++;
      return newState;
    //TODO
    default:
      return state;
  }
};

export default dashboardReducer;
