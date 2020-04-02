let express = require('express');
let Router = express.Router();
let questionsController = require('../../controllers/questions.controller.js');
Router.post('/create', questionsController.createQuestion);
Router.post('/:id/options/create', questionsController.createOption);

module.exports = Router;
