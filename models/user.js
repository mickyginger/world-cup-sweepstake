const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  paid: { type: Boolean, default: false },
  country: {
    name: String,
    flag: String,
    rank: Number
  }
});

schema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('User', schema);
