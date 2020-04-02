// import libraries.
let express = require('express');
let Router = express.Router();
let optionsController = require('../../controllers/options.controller');

// Delete route
Router.delete('/:id/delete', optionsController.deleteOption);

// add vote rouute.
Router.post('/:id/add_vote', optionsController.addVote);

// export module.
module.exports = Router;
