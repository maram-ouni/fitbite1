
// const express = require('express');
// const {
//     createRecette,
//     getRecettes,
//     getRecetteParId,
//     supprimerRecette,
// } = require('../controllers/recettesController');

// const router = express.Router();

// router.post('/', createRecette);
// router.get('/', getRecettes);
// router.get('/:id', getRecetteParId);
// router.delete('/:id', supprimerRecette);

// module.exports = router;
// routes/recettesRoutes.js

const express = require('express');
const {
  creerRecette,
  getRecettes,  // Fonction importée correctement
  getRecetteParId,
  supprimerRecette,
} = require('../controllers/recettesController');

const router = express.Router();

// Route pour créer une recette
router.post('/', creerRecette);

// Route pour récupérer toutes les recettes
router.get('/', getRecettes);  // Vérifiez que getRecettes est bien défini dans le controller

// Route pour récupérer une recette par ID
router.get('/:id', getRecetteParId);

// Route pour supprimer une recette par ID
router.delete('/:id', supprimerRecette);

module.exports = router;
