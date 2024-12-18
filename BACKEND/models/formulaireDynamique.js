const mongoose = require('mongoose');

const formulaireDynamiqueSchema = new mongoose.Schema({
  trimestre: {
    type: Number,
    required: true,
  },
  poidsActuel: {
    type: Number,
    required: true,
  },
  taille: {
    type: Number,
    required: true,
  },
  recommandations: {
    type: String,
    required: false,  // Ce champ peut être optionnel
  },
  ActivitePhysique: {
    type: String,
    required: true,
  },
  regimeSpecial: {
    type: String,
    required: false,  // Ce champ peut être optionnel
  },
  doctorRemarks: {
    type: String,
    required: false,  // Ce champ peut staffer
  },
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur',
    required: false,  // Utilisateur obligatoire pour lier le formulaire
  }
});

module.exports = mongoose.model('FormulaireDynamique', formulaireDynamiqueSchema);
