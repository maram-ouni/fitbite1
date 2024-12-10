const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../models/User'); // Importer le modèle utilisateur
const crypto = require('crypto');
const router = express.Router(); // Keep using the router instance instead of app
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez un autre service si nécessaire
  auth: {
    user: 'votre.email@gmail.com',
    password: 'votre.motdepasse', // Utilisez un mot de passe d'application
  },
});

// Fonction pour envoyer le code de vérification
const sendVerificationCode = async (email, code) => {
  const mailOptions = {
    from: 'votre.email@gmail.com',
    to: email,
    subject: 'Code de vérification de compte',
    text: `Votre code de vérification est : ${code}`,
  };

  await transporter.sendMail(mailOptions);
};

// Route pour l'inscription
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe sont requis' });
  }

  // Vérifier si l'email existe déjà
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Cet email est déjà utilisé' });
  }

  // Générer un code de vérification unique
  const verificationCode = crypto.randomBytes(3).toString('hex'); // Code à 6 caractères

  // Créer un nouvel utilisateur avec l'email et mot de passe en clair
  const newUser = new User({
    email,
    password, // Enregistrer le mot de passe en clair
    verificationCode,
  });

  try {
    // Enregistrer l'utilisateur
    await newUser.save();

    // Envoyer le code de vérification par email
    await sendVerificationCode(email, verificationCode);

    res.status(201).json({ message: 'Utilisateur créé, un code de vérification a été envoyé à votre email.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error });
  }
});

// Route pour vérifier le code de vérification
router.post('/verify-email', async (req, res) => {
  const { email, verificationCode } = req.body;

  if (!email || !verificationCode) {
    return res.status(400).json({ message: 'Email et code de vérification sont requis' });
  }

  // Trouver l'utilisateur par email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }

  if (user.verificationCode !== verificationCode) {
    return res.status(400).json({ message: 'Code de vérification incorrect' });
  }

  // Marquer l'utilisateur comme vérifié
  user.isVerified = true;
  user.verificationCode = undefined; // Effacer le code de vérification après la validation
  await user.save();

  res.status(200).json({ message: 'Email vérifié avec succès. Vous pouvez maintenant compléter vos informations.' });
});

module.exports = router;




// Route d'inscription (Sign Up)
// router.post('/signup', async (req, res) => {
//   const {email, motDePasse } = req.body;

//   try {
//     // Vérifier si l'utilisateur existe déjà
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Cet email est déjà utilisé' });
//     }

//     // Générer un code de vérification aléatoire
//     const verificationCode = Math.floor(100000 + Math.random() * 900000);

//     // Créer un nouvel utilisateur
//     const newUser = new User({
//       email,
//       motDePasse, // Mot de passe non haché (en texte brut)
//       isVerified: false, // Non vérifié par défaut
//     });

//     // Sauvegarder dans la base de données
//     await newUser.save();

//     // Configurer le transport pour envoyer l'email
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // Vous pouvez utiliser un autre service
//       auth: {
//         user: process.env.EMAIL, // Adresse email
//         pass: process.env.EMAIL_PASSWORD, // Mot de passe ou clé d'application
//       },
//     });

//     // Envoyer l'email avec le code de vérification
//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: email,
//       subject: 'Code de vérification',
//       text: `Bonjour ,\n\nVotre code de vérification est : ${verificationCode}.\n\nMerci de vérifier votre compte.\n\nCordialement,\nL'équipe.`,
//     });

//     res.status(201).json({ message: 'Utilisateur créé. Vérifiez votre email pour confirmer votre compte.' });
//   } catch (error) {
//     res.status(500).json({ message: "Erreur lors de l'inscription", error });
//   }
// });

// // Route de vérification de l'email
// router.post('/verify-email', async (req, res) => {
//   const { email, verificationCode } = req.body;

//   try {
//     // Trouver l'utilisateur correspondant
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Utilisateur introuvable' });
//     }

//     // Vérifier le code de vérification
//     if (user.verificationCode !== parseInt(verificationCode, 10)) {
//       return res.status(400).json({ message: 'Code de vérification incorrect' });
//     }

//     // Mettre à jour l'utilisateur comme vérifié
//     user.isVerified = true;
//     user.verificationCode = null; // Supprimer le code pour des raisons de sécurité
//     await user.save();

//     res.status(200).json({ message: 'Email vérifié avec succès' });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la vérification', error });
//   }
// });

// // Route de connexion (Sign In)
// router.post('/signin', async (req, res) => {
//   const { email, motDePasse } = req.body;

//   try {
//     console.log('Received data:', req.body);
//     // Vérifier si l'utilisateur existe
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
//     }

//     // Vérifier si l'utilisateur est vérifié
//     if (!user.isVerified) {
//       return res.status(403).json({ message: 'Veuillez vérifier votre email avant de vous connecter.' });
//     }

//     // Vérifier le mot de passe
//     if (user.motDePasse !== motDePasse) {
//       return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
//     }

//     // Retourner un succès
//     res.status(200).json({
//       message: 'Connexion réussie',
//       user: {
        
//         email: user.email,
       
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la connexion', error });
//   }
// });

// module.exports = router;
