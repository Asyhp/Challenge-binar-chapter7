const authRouter = require('./authRouter')
const biodataRouter = require('./biodataRouter')
const userRouter = require('./userRouter')
const historyRouter = require('./historyRouter')

const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/game", (req, res) => {
    res.render("game")
})

router.use("/auth", authRouter)
router.use("/biodata", biodataRouter)
router.use("/user", userRouter)
router.use("/history", historyRouter)

module.exports = router