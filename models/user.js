const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema([
{
type: Schema.Types.ObjectId,
rentDate: {type: Date, default: function () {
            let upDate = new Date().getTime(); return upDate;
          }},
rentDays: {type: Number, default: 1},
returnDate: {type: Date}
}],
{
  timestamps: true
});  

const userSchema = new Schema({
  name: {type: String},
  first: {type: String},
  last: {type: String},
  email: {type: String},
  avatar: {type: String},
  googleId: {type: String},
  admin: {type: Boolean, default: false},
  cart: [cartSchema]
},
{
  timestamps: true
}
);

module.exports = mongoose.model('User', userSchema);