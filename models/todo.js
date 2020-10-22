const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
  text: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('todos', model);
