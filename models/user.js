const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  name: {type: String},
  first: {type: String},
  last: {type: String},
  email: {type: String},
  avatar: {type: String},
  googleId: {type: String},
  cart: [{type: Schema.Types.ObjectId, ref: 'Item'}]
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);