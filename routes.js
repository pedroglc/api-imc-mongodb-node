const express = require('express');
const routes = express.Router();

const Imc = require('./src/controller/imcController');

routes.post('/imc', Imc.create);
routes.get('/imc', Imc.imc_details);
routes.put('/imc', Imc.updateImc);
routes.delete('/imc/:_id', Imc.deleteImc);

module.exports = routes;
