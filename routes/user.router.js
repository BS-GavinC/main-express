const userController = require('../controllers/user.controller');
const pagination = require('../middlewares/pagination.middleware');

const userRouter = require('express').Router();


userRouter.route('/')
    .get(pagination(), userController.getAll)

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete)


module.exports = userRouter;