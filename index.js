const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send({ test: 'hello world' });
});

const authJobsURL =
  'https://authenticjobs.com/api/?api_key=38f3b1b69046ec1828bddd633ccc8fb4&method=aj.jobs.search&keywords=Software%20Engineer, Front%20End%20Engineer&format=json&telecommuting=1';

app.get('/api/authJobs', (req, res) => {
  axios.get(authJobsURL).then(json => {
    res.send(json.data.listings['listing']);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});
