const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const  recettesRoutes = require('./routes/recettesRoutes'); 
const  favorisRoutes = require('./routes/favorisRoutes'); 
const formulaireDynamiqueRoutes = require('./routes/formulaireDynamiqueRoutes'); 
const ingredientsRoutes = require('./routes/ingredientsRoutes'); 
const listeCoursesRoutes = require('./routes/listeCoursesRoutes'); 
const supermarchesRoutes = require('./routes/supermarchesRoutes'); 
const utilisateursRoutes = require('./routes/utilisateursRoutes'); 


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/recettes', recettesRoutes);
app.use('/api/favoris', favorisRoutes);
app.use('/api/formulaireDynamique', formulaireDynamiqueRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/listeCourse', listeCoursesRoutes);
app.use('/api/supermarches', supermarchesRoutes);
app.use('/api/utilisateurs', utilisateursRoutes);





mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
