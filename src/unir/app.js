const express = require('express');
const cors = require('cors');       // Nuevo
const helmet = require('helmet');
const app = express();
const routes = require('./routes/router');

app.use(express.json()); 
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Para formularios normales

app.use('/',routes)


module.exports = app;