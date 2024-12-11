const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../models/User'); // Importer le modèle utilisateur
const router = express.Router(); // Keep using the router instance instead of app

// Route pour l'inscription (sans vérification par email)
router.post('/inscrire', async (req, res) => {
  const { email, motDePasse } = req.body;

  if (!email || !motDePasse) {
    return res.status(400).json({ message: 'Email et mot de passe sont requis' });
  }

  // Vérifier si l'email existe déjà
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Cet email est déjà utilisé' });
  }

  // Créer un nouvel utilisateur avec l'email et mot de passe en clair
  const newUser = new User({
    email,
    motDePasse, // Enregistrer le mot de passe en clair (vous devriez le hacher en production)
  });

  try {
    // Enregistrer l'utilisateur
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error });
  }
});

module.exports = router;
