const biodataRouter = require('express').Router()

biodataRouter.get("/", (req, res) => {
    res.send("ini dari biodata Router")
})

module.exports = biodataRouter