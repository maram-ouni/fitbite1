const mongoose = require('mongoose');

const favorisSchema = new mongoose.Schema({
    
    utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
    recettes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recette' }],
});

module.exports = mongoose.model('Favoris', favorisSchema);
