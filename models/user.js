const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String},
  first: {type: String},
  last: {type: String},
  email: {type: String},
  avatar: {type: String},
  googleId: {type: String},
  admin: {type: Boolean, default: false},
  cart: [{type: Schema.Types.ObjectId, ref: 'Item'}],
          rentDate: {type: Date, // when they rented it
            default: function () {
            let rentDate = new Date().getTime();
            console.log(rentDate);
            return rentDate;
            }},
          rentDays: {type: Number,
            default: function () {
            let rentDays = new Date().getTime();
            console.log(rentDays);
            return rentDays;
            }},
          returnDate: {type: Date}
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);