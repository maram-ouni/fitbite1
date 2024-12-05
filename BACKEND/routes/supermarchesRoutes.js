// const express = require('express');
// const {
//     ajouterSupermarche,
//     getSupermarches,
//     getSupermarcheParId,
//     supprimerSupermarche,
// } = require('../controllers/supermarchesController');
// const authMiddleware = require('../middlewares/authMiddleware');

// const router = express.Router();

// router.post('/', authMiddleware, ajouterSupermarche);
// router.get('/', getSupermarches);
// router.get('/:id', getSupermarcheParId);
// router.delete('/:id', authMiddleware, supprimerSupermarche);

// module.exports = router;
// routes/supermarchesRoutes.js
const express = require('express');
const {
  createSupermarche,
  getSupermarches,
  getSupermarcheById,
  updateSupermarche,
  deleteSupermarche
} = require('../controllers/supermarchesController');

const router = express.Router();

router.post('/', createSupermarche); // Créer un supermarché
router.get('/', getSupermarches); // Obtenir tous les supermarchés
router.get('/:id', getSupermarcheById); // Obtenir un supermarché par ID
router.put('/:id', updateSupermarche); // Mettre à jour un supermarché
router.delete('/:id', deleteSupermarche); // Supprimer un supermarché

module.exports = router;
