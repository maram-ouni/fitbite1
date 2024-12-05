
// const mongoose = require('mongoose');

// const utilisateurSchema = new mongoose.Schema({
//   nom: String,
//   prenom: String,
//   email: String,
//   motDePasse: String,
//   age: Number,
//   poids: Number,
//   hauteur: Number,
//   sexe: String
// });

// module.exports = mongoose.model('Utilisateur', utilisateurSchema);
const mongoose = require('mongoose');

const utilisateursSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    age: { type: Number, required: true },
    poids: { type: Number },
    hauteur: { type: Number },
    sexe: { type: String, enum: ['M', 'F'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Utilisateur', utilisateursSchema);
