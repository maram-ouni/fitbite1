const express = require('express');
const { ajouterFavoris, getFavoris, supprimerFavoris } = require('../controllers/favorisController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, ajouterFavoris);
router.get('/', authMiddleware, getFavoris);
router.delete('/:recetteId', authMiddleware, supprimerFavoris);

module.exports = router;
