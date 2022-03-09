const userRouter = require('express').Router()
const { UserController } = require('../controller/userController')
const authorizationUser = require('../middleware/authorizationUser')
const authentication = require('../middleware/authentication')


userRouter.get("/", UserController.viewAll)
userRouter.get("/:id", authorizationUser ,UserController.getUserById)

module.exports = userRouter