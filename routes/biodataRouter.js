const biodataRouter = require('express').Router()
const { BiodataController } = require('../controller/biodataController')
const authorizationBiodata = require('../middleware/authorizationBiodata')
const authentication = require('../middleware/authentication')

biodataRouter.use(authentication)
biodataRouter.get("/", BiodataController.viewAll)
biodataRouter.get("/:id", authorizationBiodata, BiodataController.viewById)
biodataRouter.get("/edit/:id", BiodataController.getEditForm)
biodataRouter.post("/edit/:id", BiodataController.editBiodata)
biodataRouter.get("/delete/:id", BiodataController.deleteUser)

module.exports = biodataRouter