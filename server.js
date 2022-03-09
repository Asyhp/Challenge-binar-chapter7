const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes')


const cors = require('cors')
const cookieParser = require('cookie-parser')


app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('assets'))
app.use(cookieParser())

app.use(router)

app.get('/', async (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`)
})