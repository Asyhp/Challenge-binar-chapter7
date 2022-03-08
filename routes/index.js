const authRouter = require('./authRouter')
const biodataRouter = require('./biodataRouter')
const userRouter = require('./userRouter')

const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use("/auth", authRouter)
router.use("/biodata", biodataRouter)
router.use("/user", userRouter)

module.exports = router