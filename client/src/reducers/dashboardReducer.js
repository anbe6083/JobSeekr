import { ADD_NEW_APPLICATION } from '../actions/applicationActions';

const initialState = {
  numberOfApplications: 0,
  Applied: 0,
  'First Interview': 0,
  'Second Interview': 0,
  'Third Interview': 0,
  Rejected: 0,
  Offers: 0,
  numberOfCompaniesAppliedTo: 0
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_APPLICATION':
      numberOfCompaniesAppliedTo++;
    // case 'FIRST_INTERVIEW':
    //   action.applicationStatus++;
    // case 'SECOND_INTERVIEW':
    //   numberOfFirstInterviews--;
    //   numberOfSecondInterviews++;
    // case 'THIRD_INTERVIEW':
    //   numberOfSecondInterviews--;
    //   numberOfThirdInterviews++;
  }
};
