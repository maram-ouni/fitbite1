const express = require('express');
const {
    ajouterIngredient,
    getIngredients,
    supprimerIngredient,
} = require('../controllers/ingredientsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, ajouterIngredient);
router.get('/', getIngredients);
router.delete('/:id', authMiddleware, supprimerIngredient);

module.exports = router;
