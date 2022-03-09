const historyRouter = require('express').Router()
const { HistoryController } = require('../controller/historyController')
const authentication = require('../middleware/authentication')
const authorizationHistory = require('../middleware/authorizationHistory')

historyRouter.use(authentication)
historyRouter.get("/", HistoryController.viewAll)
historyRouter.get("/:id", authorizationHistory, HistoryController.viewById)
historyRouter.get("/edit/:id", HistoryController.getEditForm)
historyRouter.post("/edit/:id", HistoryController.editBiodata)
historyRouter.get("/delete/:id", HistoryController.deleteUser)

module.exports = historyRouter