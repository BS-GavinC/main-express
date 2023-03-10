// Configuration des variables d'environnement
require('dotenv').config();

// Import d'express
const express = require('express');
// Import du middleware express async errors
require('express-async-errors');

// Création du serveur
const app = express();

// Import db
const db = require('./models');
// Connection à la db
db.sequelize.authenticate()
    .then(() => console.log('Connection DB successfull'))
    .catch((err) => console.log('Connection DB failed : ', err))
// Synchro db
// A faire seulement si on est en dev
if (process.env.NODE_ENV === 'development') {
    //db.sequelize.sync({ force : true }); 
    // ↑ Force comme un bourrin, supprime les tables et recréer tout à chaque sync
    //db.sequelize.sync({ alter : { drop : false} });
    // ↑ Regared l'état actuel de la db, ajoute ce qui peut être ajouté, modifie les colonnes, suppression de colonnes et/ou tables interdite
}

// Middleware app-lvl
app.use(express.json()); //permet d'utiliser du json en post, put, patch (body en json)

// Router
const router = require('./routes');
app.use('/api', router);

// Lancement serveur
app.listen(process.env.PORT, () => {
    console.log(`Server API started on port:${process.env.PORT}`);
})