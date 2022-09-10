const express = require('express');
const route = express.Router();
const menuControllers = require('./controllers/menuControllers');

route.get('/lua', menuControllers.destination);
route.get('/marte', menuControllers.destination2);
route.get('/europa', menuControllers.destination3);
route.get('/titan', menuControllers.destination4);



module.exports = route;