const Favoris = require('../models/favoris');

// Ajouter une recette aux favoris
exports.ajouterFavoris = async (req, res) => {
    try {
        const favoris = await Favoris.findOne({ utilisateur: req.utilisateur.id });
        if (!favoris) {
            const nouveauFavoris = new Favoris({
                utilisateur: req.utilisateur.id,
                recettes: [req.body.recetteId],
            });
            await nouveauFavoris.save();
            return res.status(201).json(nouveauFavoris);
        }
        favoris.recettes.push(req.body.recetteId);
        await favoris.save();
        res.status(200).json(favoris);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer les favoris d'un utilisateur
exports.getFavoris = async (req, res) => {
    try {
        const favoris = await Favoris.findOne({ utilisateur: req.utilisateur.id }).populate('recettes');
        if (!favoris) return res.status(404).json({ message: 'Aucun favoris trouvé.' });
        res.status(200).json(favoris);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une recette des favoris
exports.supprimerFavoris = async (req, res) => {
    try {
        const favoris = await Favoris.findOne({ utilisateur: req.utilisateur.id });
        if (!favoris) return res.status(404).json({ message: 'Aucun favoris trouvé.' });
        favoris.recettes = favoris.recettes.filter((id) => id.toString() !== req.params.recetteId);
        await favoris.save();
        res.status(200).json(favoris);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
