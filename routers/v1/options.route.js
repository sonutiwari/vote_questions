let express = require('express');
let Router = express.Router();
let optionsController = require('../../controllers/options.controller');
Router.delete('/:id/delete', optionsController.deleteOption);
Router.post('/:id/add_vote', optionsController.addVote);
module.exports = Router;