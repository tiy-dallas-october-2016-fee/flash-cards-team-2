var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  cards: { type: []}
});

var Set = mongoose.model('Set', schema);
module.exports = Set;
