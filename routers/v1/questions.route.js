let express = require('express');
let Router = express.Router();
let questionsController = require('../../controllers/questions.controller.js');
Router.get('/', questionsController.dummy);

module.exports = Router;
