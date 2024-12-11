// const express = require('express');
// const router = express.Router();
// const utilisateurController = require('../controllers/utilisateursController');

// router.post('/utilisateur', utilisateurController.createUtilisateur);

// module.exports = router;
const express = require('express');
const { 
    inscrireUtilisateur, 
    connecterUtilisateur, 
    getProfilUtilisateur 
} = require('../controllers/utilisateursController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes publiques
/**
 * @swagger
 * /api/auth/inscrire:
 *   post:
 *     summary: Inscription d'un utilisateur
 *     description: Permet d'inscrire un utilisateur en fournissant un email et un mot de passe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "exemple@gmail.com"
 *               motDePasse:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Inscription réussie
 *       400:
 *         description: L'utilisateur existe déjà
 *       500:
 *         description: Erreur serveur
 */
router.post('/inscrire', inscrireUtilisateur);

/**
 * @swagger
 * /api/auth/connecter:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     description: Permet de connecter un utilisateur avec son email et mot de passe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "exemple@mail.com"
 *               motDePasse:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Mot de passe incorrect
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post('/connecter', connecterUtilisateur);





// Routes protégées
router.get('/profil', authMiddleware, getProfilUtilisateur);

module.exports = router;
