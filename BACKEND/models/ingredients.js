
// const mongoose = require('mongoose');

// const ingredientSchema = new mongoose.Schema({
//   nom: String,
//   quantite: String,
//   unite: String
// });

// module.exports = mongoose.model('Ingredient', ingredientSchema);
const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nom: { type: String, required: true },
    quantiteStock: { type: Number, required: true },
    unité: { type: String, required: true },})
    

module.exports = mongoose.model('Ingredient', ingredientsSchema);
