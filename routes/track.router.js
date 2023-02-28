const trackController = require('../controllers/track.controller');
const bodyValidation = require('../middlewares/body.validator');
const pagination = require('../middlewares/pagination.middleware');
const createTrackValidator = require('../validators/track.validators');

const trackRouter = require('express').Router()

trackRouter.route('/')
    .get(pagination( {defaultLimit : 10} ), trackController.getAll)
    .post( bodyValidation(createTrackValidator) ,trackController.create)

trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)


module.exports = trackRouter;