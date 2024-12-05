
const mongoose = require('mongoose');

const listCoursesSchema = new mongoose.Schema({
    
    utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
    items: [
        {
            ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
            quantite: { type: Number, required: true },
        },
    ],
    dateCreation: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ListCourses', listCoursesSchema);
