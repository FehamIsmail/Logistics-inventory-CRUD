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

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", req.header('Origin'));
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });

//Opening server
app.listen(port,  () => {
    console.log("Server open on port " + port)
})
