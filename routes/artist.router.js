const artistController = require('../controllers/artist.controller');
const bodyValidation = require('../middlewares/body.validator');
const pagination = require('../middlewares/pagination.middleware');
const artistValidator = require('../validators/artist.validators');

const artistRouter = require('express').Router()

artistRouter.route('/')
    .get(pagination( { defaultLimit : 25 } ), artistController.getAll)
    .post( bodyValidation(artistValidator), artistController.create)

artistRouter.route('/:id')
    .get(artistController.getById)
    .put(bodyValidation(artistValidator),artistController.update)
    .delete(artistController.delete)

module.exports = artistRouter;