//intiialState for dashboard
const initialState = {
  Applied: 0,
  Rejected: 0,
  'First Interview': 0,
  'Second Interview': 0,
  'Third Interview': 0,
  Offer: 0,
  numberOfApplicationsPerMonth: [
    {
      Month: 'January',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'Feburary',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'March',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'April',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'May',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'June',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'July',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'August',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'September',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'October',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'November',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    },
    {
      Month: 'December',
      Applied: 0,
      'First Interview': 0,
      'Second Interview': 0,
      'Third Interview': 0,
      Rejected: 0,
      Offers: 0
    }
  ]
};

//iterates through an array of month objects. Sums all of the
//statuses of the job applications

function sumDatesOfApplicationsAccordingToMonths(arrayOfApplications, state) {
  const prevState = state;
  arrayOfApplications.forEach(application => {
    state.numberOfApplicationsPerMonth[
      parseInt(application.dateSubmitted.split('/')[0]) - 1
    ][application.applicationStatus]++;
  });
  return {
    ...prevState,
    numberOfApplicationsPerMonth: state.numberOfApplicationsPerMonth
  };
  // return state.numberOfApplicationsPerMonth;
}

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
    case 'POPULATE_APPLICATION_BAR_CHART':
      return sumDatesOfApplicationsAccordingToMonths(
        action.applications.data,
        state
      );
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
