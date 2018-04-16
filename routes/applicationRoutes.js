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
  });

  app.post('/api/applications/updateApplicationStatus', async (req, res) => {
    console.log(req.body);
    await User.findOneAndUpdate(
      { googleId: req.user.googleId },
      {
        applications: req.body
      }
    );
    // await User.findOneAndUpdate({ googleId: req.user.googleId }, function(
    //   err,
    //   doc
    // ) {
    //   const index = await doc.applications.findIndex(application => {
    //     return application.applicationId === req.body.applicationId;
    //   });
    //   // console.log(doc.applications[index]);
    //   doc.applications[index] = {
    //     ...doc.applications[index],
    //     applicationStatus: req.body.newApplicationStatus
    //   };
    //   // console.log(doc.applications[index]); // console.log(doc);
    //   doc.save();
    //   console.log(doc);
    // });
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
