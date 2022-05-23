const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const uri = process.env.ATLAS_URI
const itemsRouter = require('./routes/items')
const cors = require('cors')

//Connecting to mongoose database
mongoose.connect(uri, { useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('MongoDB connection: successfully opened')
})

//Initializing middlewares
app.use(cors())
app.use(express.json())
app.use('/items', itemsRouter)
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

//Setting view engine
app.set('view engine', 'ejs')

//Renders index page
app.get('/', (req, res) => {
    res.render('index');
})

//Opening server
app.listen(port,  () => {
    console.log("Server open on port " + port)
})
