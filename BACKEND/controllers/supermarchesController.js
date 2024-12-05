// controllers/supermarchesController.js
const Supermarche = require('../models/supermarches');

// Créer un supermarché
exports.createSupermarche = async (req, res) => {
  try {
    const supermarche = new Supermarche(req.body);
    await supermarche.save();
    res.status(201).send(supermarche);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtenir tous les supermarchés
exports.getSupermarches = async (req, res) => {
  try {
    const supermarches = await Supermarche.find();
    res.status(200).send(supermarches);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtenir un supermarché par ID
exports.getSupermarcheById = async (req, res) => {
  try {
    const supermarche = await Supermarche.findById(req.params.id);
    if (!supermarche) {
      return res.status(404).send({ message: 'Supermarché non trouvé' });
    }
    res.status(200).send(supermarche);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Mettre à jour un supermarché
exports.updateSupermarche = async (req, res) => {
  try {
    const supermarche = await Supermarche.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!supermarche) {
      return res.status(404).send({ message: 'Supermarché non trouvé' });
    }
    res.status(200).send(supermarche);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Supprimer un supermarché
exports.deleteSupermarche = async (req, res) => {
  try {
    const supermarche = await Supermarche.findByIdAndDelete(req.params.id);
    if (!supermarche) {
      return res.status(404).send({ message: 'Supermarché non trouvé' });
    }
    res.status(200).send({ message: 'Supermarché supprimé avec succès' });
  } catch (error) {
    res.status(500).send(error);
  }
};
