const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String},
  price: {type: Number, default: 0.00},
  rental: {type: Boolean, default: false}
},
{
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);