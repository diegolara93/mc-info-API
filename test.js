const express = require("express");
const app = express();
const path = require('path');
const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
    res.render('info')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(8080, () => {
    console.log("server is up")
})

