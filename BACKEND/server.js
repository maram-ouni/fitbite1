
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const utilisateurRoutes = require('./routes/utilisateursRoutes');
// const recetteRoutes = require('./routes/recettesRoutes');
// const listeCoursesRoutes = require('./routes/listeCoursesRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json()); // Middleware pour parser les corps de requête en JSON

// app.use('/api', utilisateurRoutes);
// app.use('/api', recetteRoutes);
// app.use('/api', listeCoursesRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Serveur démarré sur le port ${PORT}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

// Importation des routes
const utilisateurRoutes = require('./routes/utilisateursRoutes');
const listeCoursesRoutes = require('./routes/listeCoursesRoutes');
const favorisRoutes = require('./routes/favorisRoutes');
const formulaireRoutes = require('./routes/formulaireDynamiqueRoutes');
const recetteRoutes = require('./routes/recettesRoutes');  // Route de recettes
const ingredientRoutes = require('./routes/ingredientsRoutes');
const supermarchesRoutes = require('./routes/supermarchesRoutes');
// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

// Initialiser l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Définition des routes
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/listes-courses', listeCoursesRoutes);
app.use('/api/favoris', favorisRoutes);
app.use('/api/formulaires', formulaireRoutes);
app.use('/api/recettes', recetteRoutes);  // Lien vers les routes des recettes
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/supermarches', supermarchesRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ressource non trouvée' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`.yellow.bold);
});
