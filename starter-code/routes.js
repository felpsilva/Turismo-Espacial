const express = require('express');
const route = express.Router();
const menuControllers = require('./controllers/menuDestinoControllers');
const menuEquipeTecControllers = require('./controllers/menuEquipeTecControllers');
const menuTecnologiaControllers = require('./controllers/menuTecnologiaContorllers')

route.get('/lua', menuControllers.destination);
route.get('/marte', menuControllers.destination2);
route.get('/europa', menuControllers.destination3);
route.get('/titan', menuControllers.destination4);

route.get('/comandante', menuEquipeTecControllers.tec1);
route.get('/especialista', menuEquipeTecControllers.tec2);
route.get('/piloto', menuEquipeTecControllers.tec3);
route.get('/engenheiro', menuEquipeTecControllers.tec4);

route.get('/tecnologia', menuTecnologiaControllers.technology)

module.exports = route;