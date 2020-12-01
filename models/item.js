const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String},
  price: {type: Number}, // tell user per item or per day
  rent: {type: Date, // when they rented it
    default: function () {
    return new Date().getFullYear();
    }},
  due: {type: Date, // when it is due back for return
    default: function () {
    return new Date().getFullYear();
    }},
  return: {type: Date, // when they actually return it
    default: function () {
    return new Date().getFullYear();
    }}
},
{
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);