const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String},
  price: {type: Number, default: 50}
},
{
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);