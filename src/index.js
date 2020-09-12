const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://localhost/shoppingcar', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);
app.set('PORT', PORT);


module.exports = app;