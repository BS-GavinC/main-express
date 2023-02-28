const userController = require('../controllers/user.controller');
const bodyValidation = require('../middlewares/body.validator');
const pagination = require('../middlewares/pagination.middleware');
const updateUserValidator = require('../validators/user.validators');

const userRouter = require('express').Router();


userRouter.route('/')
    .get(pagination(), userController.getAll)

userRouter.route('/:id')
    .get(userController.getById)
    .put( bodyValidation(updateUserValidator), userController.update)
    .delete(userController.delete)


module.exports = userRouter;