const mongoose = require('mongoose');

const supermarchesSchema = new mongoose.Schema({
    id: { type: String, required: false, unique: true },
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  image: { type: String, required: false },
}, { timestamps: true }); // `_id` sera généré automatiquement par MongoDB

// Modèle
module.exports = mongoose.model('Supermarche', supermarchesSchema);
