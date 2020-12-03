const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String},
  price: {type: Number, default: 50}, // tell user per item or per day
  rentDate: {type: Date, // when they rented it
          default: function () {
            let rent = new Date().getTime();
            console.log(rent);
            return rent;
          }},
  rentDays: {type: Number, // when it is due back for return
    default: function () {
      let due = new Date().getTime();
      console.log(due);
      return due;
    }},
  returnDate: {type: Date, // when they actually return it
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);