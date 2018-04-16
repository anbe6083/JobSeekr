const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('../models/Applications');
require('../models/User');
const User = mongoose.model('users');
const Application = mongoose.model('applications');

module.exports = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());

  //route to get array of applications from the user
  app.get('/applications/list', async (req, res) => {
    const user = await User.findOne({ googleId: req.user.googleId });
    res.send(user.applications);
    console.log(user.applications);
  });

  //route to post a new application to array of applications on the user's account
  app.post('/applications/new', async (req, res) => {
    const existingUser = await User.findOne(
      { googleId: req.user.googleId },
      function(err, doc) {
        // console.log(req.body);
        doc.applications.push({
          applicationId: req.body.applicationId,
          company: req.body.company,
          position: req.body.position,
          dateSubmitted: req.body.dateSubmitted,
          applicationUrl: req.body.applicationUrl,
          applicationStatus: req.body.applicationStatus
        });
        doc.save();
      }
    );
  });
};
