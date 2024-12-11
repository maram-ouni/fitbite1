
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/User');

// Inscription
exports.inscrireUtilisateur = async (req, res) => {
    const email= req.body.email;
    const motDePasse = req.body.motDePasse;

    try {
        // Vérifier si l'utilisateur existe déjà
        const utilisateurExistant = await Utilisateur.findOne({ email });
        if (utilisateurExistant) {
            return res.status(400).json({ message: 'Utilisateur déjà existant.' });
        }

        // Hachage du mot de passe
        const hash = await bcrypt.hash(motDePasse, 10);
        const nouvelUtilisateur = new Utilisateur({
            email,
            motDePasse: hash,
        });

        await nouvelUtilisateur.save();
        res.status(201).json({ message: 'Inscription réussie.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur: ' + error.message });
    }
};


// Connexion
exports.connecterUtilisateur = async (req, res) => {
    const { email, motDePasse } = req.body;

    try {
        const utilisateur = await Utilisateur.findOne({ email });
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        const isMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect.' });
        }

        const token = jwt.sign({ id: utilisateur._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, utilisateur });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Profil utilisateur
exports.getProfilUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findById(req.utilisateur.id).select('-motDePasse');
        res.status(200).json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
