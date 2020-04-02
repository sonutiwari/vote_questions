// import libraries.
let express = require('express');
let Router = express.Router();
let questionsController = require('../../controllers/questions.controller.js');

//Create question.
Router.post('/create', questionsController.createQuestion);

// Get question
Router.get('/:id', questionsController.showAllOptions);

// Create options.
Router.post('/:id/options/create', questionsController.createOption);

// Delete question.
Router.delete('/:id/delete', questionsController.deleteQuestion);

// Exports module.
module.exports = Router;
