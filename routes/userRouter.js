const userRouter = require('express').Router()

userRouter.get("/", (req, res) => {
    res.send("ini dari user Router")
})

module.exports = userRouter