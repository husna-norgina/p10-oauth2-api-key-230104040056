// models/ApiKey.js
const mongoose = require('mongoose');

const apikeySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    // Panjang kunci bisa lebih kompleks di produksi, ini simulasi sederhana
    minlength: 20,
  },
  owner: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'revoked'],
    default: 'active',
  },
  ratelimit: {
    type: Number, // Jumlah request per waktu (simulasi)
    default: 1000,
  },
}, { timestamps: true });

const ApiKey = mongoose.model('ApiKey', apikeySchema);
module.exports = ApiKey;