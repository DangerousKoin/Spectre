const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });
  
  var userSchema = new mongoose.Schema({
    name: {
        type: Object,
        full: String,
        first: String,
        last: String
    },
    email: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);