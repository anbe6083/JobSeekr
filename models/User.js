const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  applications: Array
});

mongoose.model('users', userSchema);
