const trackController = require('../controllers/track.controller');
const pagination = require('../middlewares/pagination.middleware');

const trackRouter = require('express').Router()

trackRouter.route('/')
    .get(pagination( {defaultLimit : 10} ), trackController.getAll)
    .post(trackController.create)

trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)


module.exports = trackRouter;