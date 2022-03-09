const biodataRouter = require('express').Router()
const { BiodataController } = require('../controller/biodataController')
const authorizationBiodata = require('../middleware/authorizationBiodata')
const authentication = require('../middleware/authentication')

biodataRouter.use(authentication)
biodataRouter.get("/", BiodataController.getBiodata)

biodataRouter.get("/:id", authorizationBiodata, BiodataController.getBiodataById)

module.exports = biodataRouter