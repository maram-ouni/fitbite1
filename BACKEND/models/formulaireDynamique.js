const mongoose = require('mongoose');

const formulaireDynamiqueSchema = new mongoose.Schema({
  
  trimestre: Number,
  poidsActuel: Number,
  taille:Number,
  recommandations: String,
  ActivitePhysique: String,

  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur'
  }
});

module.exports = mongoose.model('FormulaireDynamique', formulaireDynamiqueSchema);
