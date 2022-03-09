const { validatorHandler } = require('../middleware/validatorJoi')
const AuthController = require('../controller/authController')
const { registerUserSchema, loginUserSchema } = require('../validationSchema/authSchema')
const authRouter = require('express').Router()

authRouter.get("/register", AuthController.getRegister)
authRouter.post("/register", validatorHandler(registerUserSchema, "body"), AuthController.register)
authRouter.get("/login", AuthController.getLogin)
authRouter.post("/login", validatorHandler(loginUserSchema, "body"), AuthController.login)
authRouter.get("/index", AuthController.getIndex)


module.exports = authRouter