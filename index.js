const express = require('express');
const app = express();
const axios = require('axios');
// const keys = require('./config/keys');

// const getJobListings = () => {
//   const request = axios
//     .get(
//       `https://authenticjobs.com/api/?api_key=${
//         keys.authenticJobs.api_key
//       }&method=aj.jobs.search&keywords=Software%20Engineer, Front%20End%20Engineer, Javascript&format=json`
//     )
//     .then(json => {
//       return json.data.listings['listing'];
//     })
//     .catch(err => {
//       return Promise.reject(err);
//     });
//   return request;
// };

// const getLocations = async () => {
//   const jobListings = await getJobListings();
//   const locations = [];
//   jobListings.forEach(jobListing => {
//     //find if there exists a location object
//     const existingLocationEntry = locations.find(obj => {
//       if (jobListing.company.location) {
//         return obj.location == jobListing.company.location['name'];
//       }
//     });
//     //if the location object already exists, push the new jobEntry to the list of jobs in that location
//     //else, make a new location object and push the job listing to the array of jobs
//     if (existingLocationEntry) {
//       existingLocationEntry['jobs'].push(jobListing);
//     } else {
//       if (jobListing.company.location) {
//         locations.push({
//           name: jobListing.company.location['name'],
//           jobs: [jobListing]
//         });
//       }
//     }
//   });
//   return locations;
// };

// const getCurrentDate = () => {
//   const today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth() + 1; //January is 0!

//   const yyyy = today.getFullYear();
//   if (dd < 10) {
//     dd = '0' + dd;
//   }
//   if (mm < 10) {
//     mm = '0' + mm;
//   }
//   return dd + '/' + mm + '/' + yyyy;
// };

// const createNewBoard = () => {
//   const request = axios
//     .post(
//       `https://api.trello.com/1/boards/?name=${'Job Search started on: ' +
//         getCurrentDate()}&defaultLabels=true&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key=${
//         keys.trello.api_key
//       }&token=${keys.trello.token}`
//     )
//     .then(response => {
//       createNewLists(response.data['id']);
//       return response.data['id'];
//     })
//     .catch(err => {
//       return Promise.reject(err);
//     });
//   return request;
// };

// const createNewLists = async boardId => {
//   //TODO: URL is static
//   const locations = await [...new Set(await getLocations())];
//   // locations.forEach(obj => {
//   //   obj['jobs'] = [];
//   // });
//   // const jobListings = await getJobListings();
//   // locations.forEach(obj => {
//   //   jobListings.forEach(jobListing => {
//   //     if (
//   //       jobListing.company.location &&
//   //       (jobListing.company.location['name'].includes(obj['name']) ||
//   //         obj['name'].includes(jobListing.company.location['name']))
//   //     ) {
//   //       obj['jobs'].push(jobListing);
//   //     }
//   //   });
//   // });

//   locations.forEach(location => {
//     createNewList(boardId, location);
//   });
// };

// const getListsFromTrello = async boardId => {
//   const lists = axios
//     .get(
//       `https://api.trello.com/1/boards/${boardId}/lists?key=${
//         keys.trello.api_key
//       }&token=${keys.trello.token}`
//     )
//     .then(res => {
//       return Promise.resolve(res['data']);
//     })
//     .catch(err => {
//       return Promise.reject(err);
//     });
//   return await lists;
// };

// const createNewList = (boardId, locationObj) => {
//   //TODO: URL is static
//   const listId = axios
//     .post(
//       `https://api.trello.com/1/lists?name=${
//         locationObj['name']
//       }&idBoard=${boardId}&key=${keys.trello.api_key}&token=${
//         keys.trello.token
//       }`
//     )
//     .then(res => {
//       locationObj['jobs'].forEach(job => {
//         createNewCard(job, res.data['id']);
//       });
//       return res.data['id'];
//     })
//     .catch(err => {
//       return Promise.reject(err);
//       console.log('createNewLocationList error: ' + err);
//     });

//   return listId;
// };

// const createNewCard = (newListing, trelloListId) => {
//   const description = `Perks: ${
//     !newListing['perks'] ? 'None Listed' : newListing['perks']
//   } \n
//   Application URL: ${newListing['apply_url']} \n
//   Site URL: ${newListing['url']} \n
//   Tagline: ${newListing['tagline'] ? newListing['tagline'] : ''} \n
//   Keywords: ${newListing['keywords']} \n
//   Location: ${
//     newListing.company.location
//       ? newListing.company.location['name']
//       : 'None Listed'
//   } \n
//   Relocation Assistance? ${
//     newListing['relocation_assistance'] ? 'Yes' : 'No'
//   } \n
//   Remote? ${newListing['telecommuting'] ? 'Yes' : 'No'} \n`;
//   const url = `https://api.trello.com/1/cards?name=${newListing.company[
//     'name'
//   ] +
//     ': ' +
//     newListing['title']}
//   &desc=${description}&idList=${trelloListId}&keepFromSource=all&key=${
//     keys.trello.api_key
//   }&token=${keys.trello.token}`;

//   axios
//     .post(url)
//     .then(res => {})
//     .catch(err => {
//       console.log('createNewCard error: ' + err);
//       return Promise.reject(err);
//     });
// };

app.get('/', (req, res) => {
  res.send({ test: 'hello world' });
});

// app.get('/api/authJobs', (req, res) => {
//   axios
//     .get(
//       `https://authenticjobs.com/api/?api_key=${
//         keys.authenticJobs.api_key
//       }&method=aj.jobs.search&keywords=Software%20Engineer, Front%20End%20Engineer, Javascript, Node, Node.js, C&format=json`
//     )
//     .then(json => {
//       res.send(json.data.listings['listing']);
//     });
// });

// app.get('/api/trelloNewBoard', async (req, res) => {
//   res.redirect('http://www.trello.com/b/' + (await createNewBoard()));
// });

// app.get('/api/getLocations', async (req, res) => {
//   res.send(await getLocations());
// });

// app.get('/api/getJobListings', async (req, res) => {
//   res.send(await getJobListings());
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});
