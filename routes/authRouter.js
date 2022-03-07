const authRouter = require('express').Router()

authRouter.get("/login", (req, res) => {
    res.send('ini login cuy')
})

module.exports = authRouter