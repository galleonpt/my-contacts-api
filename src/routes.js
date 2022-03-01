const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const routes = Router();

routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.post('/contacts', ContactController.store);
routes.delete('/contacts/:id', ContactController.delete);
routes.put('/contacts/:id', ContactController.update);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

module.exports = routes;
