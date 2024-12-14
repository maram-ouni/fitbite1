
const mongoose = require('mongoose');


const recettesSchema = new mongoose.Schema({
    categorie: { type: string, ref: 'Categorie', required: false },
    nom: { type: String, required: true },
    description: { type: String },
    calories: { type: Number },
    ingredients: [
        {
            ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
            quantite: { type: Number, required: true },
        },
    ],
    instructions: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Recette', recettesSchema);
