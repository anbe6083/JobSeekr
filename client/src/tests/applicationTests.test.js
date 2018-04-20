const sumDatesOfApplicationsAccordingToMonths = require('./addNumberOfApplications');

const arrayOfCompaniesAppliedTo = [
  {
    applicationId: 0,
    company: 'ServiceTitan',
    position: 'SWE',
    dateSubmitted: '04/16/2018',
    applicationUrl: 'servicetitan.com',
    applicationStatus: 'Rejected',
    resumeUsed: 'Placeholder',
    oldApplicationStatus: 'Applied'
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

test('Sum the months of applications that the user applied to', () => {
  expect(
    sumDatesOfApplicationsAccordingToMonths(arrayOfCompaniesAppliedTo)
  ).toEqual([0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1]);
});
