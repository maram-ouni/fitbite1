const express = require('express');
const {
    ajouterListeCourses,
    getListesCourses,
    updateListeCourse,
    supprimerListeCourses,
} = require('../controllers/listeCoursesController'); // Importer les fonctions du contrôleur
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware d'authentification

const router = express.Router();

// Routes pour les listes de courses
router.post('/', authMiddleware, ajouterListeCourses); // Ajouter une nouvelle liste
router.get('/', authMiddleware, getListesCourses); // Obtenir toutes les listes de courses
router.put('/:id', authMiddleware, updateListeCourse); // Mettre à jour une liste de courses
router.delete('/:id', authMiddleware, supprimerListeCourses); // Supprimer une liste de courses

module.exports = router;
