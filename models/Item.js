const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  expiryDate: Date,
  quantity: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
