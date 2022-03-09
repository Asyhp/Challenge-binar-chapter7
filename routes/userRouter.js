const userRouter = require('express').Router()
const { UserController } = require('../controller/userController')

userRouter.get("/", (req, res) => {
    res.send("ini dari user Router")
})
userRouter.get("/admin", UserController.viewAll)

module.exports = userRouter