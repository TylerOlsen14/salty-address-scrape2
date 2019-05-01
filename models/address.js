const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AddressSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false,
  },
  urla: {
    type: String,
    required: false
  }
})

module.exports = Adress = mongoose.model('Address', AddressSchema);