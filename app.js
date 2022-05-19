const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.listen(port,  () => {
    console.log("Server open on port " + port);
})

app.get('/', function (req, res) {
    res.render('index.ejs')
})

