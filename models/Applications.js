const mongoose = require('mongoose');

const { Schema } = mongoose;

const applicationSchema = new Schema({
  company: String,
  position: String,
  dateSubmitted: String,
  applicationUrl: String,
  applicationStatus: String
});

mongoose.model('applications', applicationSchema);
