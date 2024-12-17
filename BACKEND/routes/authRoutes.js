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



// Route pour la connexion
router.post('/connexion', async (req, res) => {
  const { email, motDePasse } = req.body;

  // Vérifier si les champs requis sont présents
  if (!email || !motDePasse) {
    return res.status(400).json({ message: 'Email et mot de passe sont requis.' });
  }

  try {
    // Rechercher l'utilisateur par email
    const utilisateur = await User.findOne({ email });
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    // Comparer le mot de passe envoyé avec celui de la base de données
    if (motDePasse !== utilisateur.motDePasse) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }
    
    // Répondre avec les informations de l'utilisateur
    res.status(200).json({
      message: 'Connexion réussie.',
      utilisateur: { id: utilisateur._id, email: utilisateur.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error });
  }
});

router.post('/favorites', async (req, res) => {
  const { recetteId, utilisateurId } = req.body;

  try {
    const utilisateur = await User.findById(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Logique pour ajouter la recette aux favoris de l'utilisateur
    utilisateur.favorites.push(recetteId);
    await utilisateur.save();

    res.status(200).json({ message: 'Recette ajoutée aux favoris' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout aux favoris', error });
  }
});

router.get('/favorites/:userId/:recipeId', async (req, res) => {
  const { userId, recipeId } = req.params;

  try {
    // Trouver l'utilisateur dans la base de données
    const utilisateur = await User.findById(userId);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifier si la recetteId existe dans le tableau de favoris
    const isFavorite = utilisateur.favorites.includes(recipeId);

    res.status(200).json({ isFavorite });
  } catch (error) {
    console.error("Erreur lors de la vérification de l'état favori :", error);
    res.status(500).json({
      message: "Erreur lors de la vérification de l'état favori",
      error: error.message,
    });
  }
});


router.delete('/favorites', async (req, res) => {
  const { recetteId, utilisateurId } = req.body;

  try {
    const utilisateur = await User.findById(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier si la recette est déjà dans les favoris
    const index = utilisateur.favorites.indexOf(recetteId);

    if (index > -1) {
      // Si la recette est dans les favoris, la supprimer
      utilisateur.favorites.splice(index, 1);
      await utilisateur.save();
      return res.status(200).json({ message: 'Recette supprimée des favoris' });
    } else {
      // Si la recette n'est pas dans les favoris
      return res.status(404).json({ message: 'Recette non trouvée dans les favoris' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression des favoris', error });
  }
});

module.exports = router;

