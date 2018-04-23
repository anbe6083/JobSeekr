import axios from 'axios';
// function sumDatesOfApplicationsAccordingToMonths(arrayOfApplications) {
//   const monthsResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//   arrayOfApplications.forEach(application => {
//     monthsResult[parseInt(application.dateSubmitted.split('/')[0]) - 1]++;
//   });
//   return monthsResult;
// }
const monthsResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function sumApplicationStatus(arrayOfMonths, status) {
  let result = arrayOfMonths.map(application => {
    return application[status];
  });
  return result;
}

function sumDatesOfApplicationsAccordingToMonths(arrayOfApplications) {
  const arrayOfMonths = [
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
  ];
  arrayOfApplications.forEach(application => {
    // monthsResult[parseInt(application.dateSubmitted.split('/')[0]) - 1]++;
    arrayOfMonths[parseInt(application.dateSubmitted.split('/')[0]) - 1][
      application.applicationStatus
    ]++;
  });

  return arrayOfMonths;
}
module.exports = {
  sumDatesOfApplicationsAccordingToMonths,
  sumApplicationStatus
};
