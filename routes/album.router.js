const albumController = require('../controllers/album.controller');
const bodyValidation = require('../middlewares/body.validator');
const pagination = require('../middlewares/pagination.middleware');
const albumValidator = require('../validators/album.validators');

const albumRouter = require('express').Router()

albumRouter.route('/')
    .get(pagination(), albumController.getAll)
    .post(bodyValidation(albumValidator), albumController.create)

albumRouter.route('/:id')
    .get(albumController.getById)
    .put(bodyValidation(albumValidator), albumController.update)
    .delete(albumController.delete)

module.exports = albumRouter;