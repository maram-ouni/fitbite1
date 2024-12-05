const jwt = require('jsonwebtoken'); // Bibliothèque pour gérer les tokens

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token'); // Vérifie si le token est présent dans l'en-tête

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' }); // Pas de token
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie et décode le token avec une clé secrète
        req.utilisateur = decoded; // Ajoute les infos utilisateur au request
        next(); // Passe au middleware ou au contrôleur suivant
    } catch (err) {
        res.status(400).json({ message: 'Token invalide.' }); // Token non valide
    }
};
