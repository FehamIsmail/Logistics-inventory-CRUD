const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const uri = process.env.ATLAS_URI
const itemsRouter = require('./routes/items')

//Connecting to mongoose database
mongoose.connect(uri, { useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('MongoDB connection: successfully opened')
})

//Opening server
app.listen(port,  () => {
    console.log("Server open on port " + port)
})

//Initializing middlewares
app.use(express.json())
app.use('/items', itemsRouter)

app.get('/', function (req, res) {

})

