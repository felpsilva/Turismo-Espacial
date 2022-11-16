const express = require('express');
const route = express.Router();
const menuControllers = require('./controllers/menuDestinoControllers');
const menuEquipeTecControllers = require('./controllers/menuEquipeTecControllers');
const menuTecnologiaControllers = require('./controllers/menuTecnologiaContorllers')

route.get('/destinos', menuControllers.destination);

route.get('/equipe-tecnica', menuEquipeTecControllers.tec1);

route.get('/tecnologias', menuTecnologiaControllers.technology)

module.exports = route;