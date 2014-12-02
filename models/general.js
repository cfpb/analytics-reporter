var mongoose = require('mongoose');

module.exports = mongoose.model(
  'Public', new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    apicall: { type: String, required: true, unique: true },
    data: { required: false }
  })
);
