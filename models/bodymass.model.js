const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
const bodymassSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type:Number, required: true },
  bmi: { type: Number, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true,
});

const Bodymass = mongoose.model('Bodymass', bodymassSchema);

module.exports = Bodymass;