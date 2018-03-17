const express = require('express');
const app = express();
const axios = require('axios');
const keys = require('./config/keys');
app.get('/', (req, res) => {
  res.send({ test: 'hello world' });
});

app.get('/api/authJobs', (req, res) => {
  axios
    .get(
      `https://authenticjobs.com/api/?api_key=${
        keys.authenticJobs.api_key
      }&method=aj.jobs.search&keywords=Software%20Engineer, Front%20End%20Engineer&format=json&telecommuting=1`
    )
    .then(json => {
      res.send(json.data.listings['listing']);
    });
});

const getListings = () => {
  const request = axios
    .get(
      `https://authenticjobs.com/api/?api_key=${
        keys.authenticJobs.api_key
      }&method=aj.jobs.search&keywords=Software%20Engineer, Front%20End%20Engineer&format=json&telecommuting=1`
    )
    .then(json => {
      return json.data.listings['listing'];
    })
    .catch(err => {
      return Promise.reject(err);
    });
  return request;
};

const getCurrentDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
};

const createNewBoard = () => {
  //TODO: URL is static
  axios
    .post(
      `https://api.trello.com/1/boards/?name=${'Job Search started on: ' +
        getCurrentDate()}&defaultLabels=true&defaultLists=true&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key=${
        keys.trello.api_key
      }&token=${keys.trello.token}`
    )
    .then(response => {
      createNewLists(response.data['id']);
    })
    .catch(err => {
      console.log('createNewBoard error: ' + err);
    });
};

const createNewLists = boardId => {
  //TODO: URL is static
  axios
    .post(
      `https://api.trello.com/1/lists?name=companies&idBoard=${boardId}&key=${
        keys.trello.api_key
      }&token=${keys.trello.token}`
    )
    .then(async res => {
      const listings = await getListings();
      listings.forEach(listing => {
        createNewCard(listing, res.data['id']);
      });
    })
    .catch(err => {
      console.log('createNewLists error: ' + err);
    });
};

const createNewCard = (newListing, trelloListId) => {
  const perks = !newListing['perks'] ? 'None Listed' : newListing['perks'];
  const relocation = newListing['relocation_assistance'] ? 'Yes' : 'No';
  const isRemote = newListing['telecommuting'] ? 'Yes' : 'No';
  const location = newListing.company.location
    ? newListing.company.location['name']
    : 'None Listed';
  const description = `Perks: ${perks} \n 
  Application URL: ${newListing['apply_url']} \n
  Site URL: ${newListing['url']} \n
  Tagline: ${newListing['tagline']} \n
  Keywords: ${newListing['keywords']} \n
  Location: ${location} \n
  Relocation Assistance? ${relocation} \n
  Remote? ${isRemote} \n`;
  axios
    .post(
      `https://api.trello.com/1/cards?name=${newListing.company['name'] +
        ': ' +
        newListing['title']}
        &desc=${description}&idList=${trelloListId}&keepFromSource=all&key=${
        keys.trello.api_key
      }&token=${keys.trello.token}`
    )
    .then(res => {})
    .catch(err => {
      console.log('createNewCard error: ' + err);
    });
};

app.get('/api/trelloNewBoard', (req, res) => {
  createNewBoard();
  res.send('successful');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});
