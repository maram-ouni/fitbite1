const Ingredient = require('../models/ingredients');

// Ajouter un ingrédient
exports.ajouterIngredient = async (req, res) => {
    try {
        const nouvelIngredient = new Ingredient(req.body);
        await nouvelIngredient.save();
        res.status(201).json(nouvelIngredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer tous les ingrédients
exports.getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un ingrédient
exports.supprimerIngredient = async (req, res) => {
    try {
        const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
        if (!ingredient) return res.status(404).json({ message: 'Ingrédient non trouvé.' });
        res.status(200).json({ message: 'Ingrédient supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
