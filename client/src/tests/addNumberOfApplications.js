import axios from 'axios';
// function sumDatesOfApplicationsAccordingToMonths(arrayOfApplications) {
//   const monthsResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//   arrayOfApplications.forEach(application => {
//     monthsResult[parseInt(application.dateSubmitted.split('/')[0]) - 1]++;
//   });
//   return monthsResult;
// }
const monthsResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function sumDatesOfApplicationsAccordingToMonths(arrayOfApplications) {
  arrayOfApplications.forEach(application => {
    monthsResult[parseInt(application.dateSubmitted.split('/')[0]) - 1]++;
  });
  return monthsResult;
}
module.exports = sumDatesOfApplicationsAccordingToMonths;
