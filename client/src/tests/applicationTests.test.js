const functions = require('./addNumberOfApplications');

const arrayOfCompaniesAppliedTo = [
  {
    applicationId: 0,
    company: 'ServiceTitan',
    position: 'SWE',
    dateSubmitted: '04/16/2018',
    applicationUrl: 'servicetitan.com',
    applicationStatus: 'Rejected'
  },
  {
    applicationId: 1,
    company: 'Apple',
    position: 'SWE',
    dateSubmitted: '04/17/2018',
    applicationUrl: 'apple.com',
    applicationStatus: 'First Interview'
  },
  {
    applicationId: 2,
    company: 'Google',
    position: 'Software Engineer',
    dateSubmitted: '04/17/2018',
    applicationUrl: 'google.com',
    applicationStatus: 'First Interview'
  },
  {
    applicationId: 2,
    company: 'Instagram',
    position: 'Software Engineer',
    dateSubmitted: '12/17/2018',
    applicationUrl: 'google.com',
    applicationStatus: 'First Interview'
  }
];

const testData = [
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
    'First Interview': 2,
    'Second Interview': 0,
    'Third Interview': 0,
    Rejected: 1,
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
    'First Interview': 1,
    'Second Interview': 0,
    'Third Interview': 0,
    Rejected: 0,
    Offers: 0
  }
];

// test('Sum the Months of applications that the user applied to', () => {
//   expect(
//     sumDatesOfApplicationsAccordingToMonths(arrayOfCompaniesAppliedTo)
//   ).toEqual([0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1]);
// });

test('Sum the applied of applications that the user applied to', () => {
  expect(
    functions.sumDatesOfApplicationsAccordingToMonths(arrayOfCompaniesAppliedTo)
  ).toEqual();
});

test('Does the function sum the number of first interviews correctly', () => {
  expect(functions.sumApplicationStatus(testData, 'First Interview')).toBe(1);
});
