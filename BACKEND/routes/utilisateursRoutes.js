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
router.post('/api/inscrire', inscrireUtilisateur);
router.post('/connecter', connecterUtilisateur);




// Routes protégées
router.get('/profil', authMiddleware, getProfilUtilisateur);

module.exports = router;
