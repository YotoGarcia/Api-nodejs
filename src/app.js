const express = require('express');
const morgan = require('morgan')
const config = require('./config');

const clientes = require('./modulos/clientes/rutas');
const { todos } = require('./DB/mysql');
const { error } = require('./red/respuestas');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes);
app.get(error);

module.exports = app;