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
  cart: [{
          type: Schema.Types.ObjectId, ref: 'Item',
          name: {type: Schema.Types.name, ref: 'Item'},
          price: {type: Schema.Types.price, ref: 'Item'},
          rentDate: {type: Date, default: function () {
            let upDate = new Date().getTime();
            return upDate;
          }},
          rentDays: {type: Number, default: 1},
          returnDate: {type: Date}
        }]
},
{
timestamps: true
})


module.exports = mongoose.model('User', userSchema);