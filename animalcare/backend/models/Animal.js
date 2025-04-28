const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  healthStatus: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
}, {
  timestamps: true
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
