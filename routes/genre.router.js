const genreRouter = require('express').Router();
const genreController = require('../controllers/genre.controller');
const pagination = require('../middlewares/pagination.middleware');
//Méthode 1 : on décrit toutes les méthodes possibles sur le router
//On peut voir que des routes se répètent (-> méthode 2)
// genreRouter.get('/' , () => {})
// genreRouter.get('/:id', () => {})
// genreRouter.post('/', () => {})
// genreRouter.put('/:id', () => {})
// genreRouter.delete('/:id', () => {})


//Méthode 2 : On décrit toutes les routes possibles, puis sur les routes, les méthodes
genreRouter.route('/')
    //Pour utiliser un middleware (route, middlewares, controller)
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }) ,genreController.getAll)
    .post(genreController.create)

genreRouter.route('/:id')
    .get(genreController.getById)
    .put(genreController.update)
    .delete(genreController.delete)

module.exports = genreRouter;