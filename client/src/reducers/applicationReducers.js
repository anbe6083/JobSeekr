const intiialState = [
  {
    company: 'Facebook',
    position: 'SWE',
    dateSubmitted: '4/3/2018',
    applicationUrl: 'facebook.com'
  },
  {
    company: 'Twitter',
    position: 'SWE',
    dateSubmitted: '3/7/2018',
    applicationUrl: 'twitter.com'
  },
  {
    company: 'Instagram',
    position: 'SWE',
    dateSubmitted: '3/12/2018',
    applicationUrl: 'www.instagram.com'
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
