
const ListCourses = require('../models/listeCourses');

exports.ajouterListeCourses = async (req, res) => {
    try {
        const nouvelleListe = new ListCourses({
            utilisateur: req.utilisateur.id,
            items: req.body.items,
        });
        await nouvelleListe.save();
        res.status(201).json(nouvelleListe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getListesCourses = async (req, res) => {
    try {
        const listes = await ListCourses.find({ utilisateur: req.utilisateurs.id }).populate('items.ingredient');
        res.status(200).json(listes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateListeCourse = async (req, res) => {
    try {
      const listeId = req.params.id;
      const miseAJour = req.body;
  
      const listeMiseAJour = await ListeCourses.findByIdAndUpdate(
        listeId,
        miseAJour,
        { new: true, runValidators: true } // Retourne la version mise à jour
      );
  
      if (!listeMiseAJour) {
        return res.status(404).json({ message: 'Liste de courses non trouvée' });
      }
  
      res.status(200).json(listeMiseAJour);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de la liste', details: error.message });
    }
  };

exports.supprimerListeCourses = async (req, res) => {
    try {
        const liste = await ListCourses.findByIdAndDelete(req.params.id);
        if (!liste) return res.status(404).json({ message: 'Liste non trouvée.' });
        res.status(200).json({ message: 'Liste supprimée avec succès.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
