
const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({

    nom: { type: String, required: true },
    quantiteStock: { type: Number, required: false},
    unité: { type: String, required: false },})
    

module.exports = mongoose.model('Ingredient', ingredientsSchema);
