// const express = require('express');
// const { sauvegarderFormulaire } = require('../controllers/formulaireDynamiqueController');

// const router = express.Router();

// router.post('/sauvegarder', sauvegarderFormulaire);

// module.exports = router;
// routes/formulaireDynamiqueRoutes.js
const express = require('express');
const {
  createFormulaire,
  getFormulaires,
  getFormulaireById,
  updateFormulaire,
  deleteFormulaire
} = require('../controllers/formulaireDynamiqueController');

const router = express.Router();

router.post('/', createFormulaire); // Créer un formulaire dynamique
router.get('/', getFormulaires); // Obtenir tous les formulaires dynamiques
router.get('/:id', getFormulaireById); // Obtenir un formulaire dynamique par ID
router.put('/:id', updateFormulaire); // Mettre à jour un formulaire dynamique
router.delete('/:id', deleteFormulaire); // Supprimer un formulaire dynamique

module.exports = router;
