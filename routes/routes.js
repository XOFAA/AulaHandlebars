const express = require('express')
const routes = express.Router();

const IndexControllers = require('../contollers/IndexControllers')

routes.get('/agenda',IndexControllers.Agenda)

routes.post('/Save',IndexControllers.Save)


module.exports =routes;