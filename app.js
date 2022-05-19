const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
}, {
    timestamps: true,
})

mongoose.connect(uri, { useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log('MongoDB connection: successfully opened')
})
app.use(express.json())

app.listen(port,  () => {
    console.log("Server open on port " + port);
})

app.get('/', function (req, res) {
    res.render('index.ejs')
})

