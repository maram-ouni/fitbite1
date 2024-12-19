const mongoose = require('mongoose');

const supermarchesSchema = new mongoose.Schema({
    
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    ville: { type: String, required: true },
    image: { type: String, required: false },
    
});


  
module.exports = mongoose.model('Supermarche', supermarchesSchema);
