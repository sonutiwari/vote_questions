let express = require('express');
let Router = express.Router();
let questionsController = require('../../controllers/questions.controller.js');
Router.post('/create', questionsController.createQuestion);
Router.post('/:id', questionsController.showAllOptions);
Router.post('/:id/options/create', questionsController.createOption);
Router.delete('/:id/delete', questionsController.deleteQuestion);
module.exports = Router;
