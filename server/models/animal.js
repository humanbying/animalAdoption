const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
  name: { type: String, required: true},
  species: { type: String }, // 'cat', 'mongoose'
  age: { type: Number, required: true, min: 0}, //negative age doesn't make sense
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
