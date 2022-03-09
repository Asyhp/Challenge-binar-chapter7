const userRouter = require('express').Router()
const { UserController } = require('../controller/userController')
const authorizationUser = require('../middleware/authorizationUser')
const authentication = require('../middleware/authentication')

userRouter.use(authentication)
userRouter.get("/", UserController.viewAll)
userRouter.get("/:id", authorizationUser ,UserController.viewById)
userRouter.get("/edit/:id", UserController.getEditForm)
userRouter.post("/edit/:id", UserController.editUser)
userRouter.get("/delete/:id", UserController.deleteUser)

module.exports = userRouter