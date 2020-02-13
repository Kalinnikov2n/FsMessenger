const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
const mainRouter = require('./routes/main')
app.use('/', mainRouter)
app.listen(port, () => console.log(`listening ${port}`))

module.exports = app
