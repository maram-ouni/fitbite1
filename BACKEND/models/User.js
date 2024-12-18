const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    // verificationCode: { type: String }, // Code de vérification envoyé à l'utilisateur
    // isVerified: { type: Boolean, default: false }, // Indicateur de vérification
    nom: { type: String },
    prenom: { type: String },
    age: { type: Number },

    photo: { type: String },

    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recette' }]

}, { timestamps: true });

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
