//intiialState for dashboard
const initialState = {
  applied: 1,
  rejected: 1,
  'first interview': 1,
  'second interview': 0,
  'third interview': 0,
  offer: 0
};

//actions for dashboard charts

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_APPLIED':
      state.applied++;
    case 'EDIT_APPLICATION':
    //TODO
    default:
      return state;
  }
};

export default dashboardReducer;
