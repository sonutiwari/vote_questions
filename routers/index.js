// Importing required libraries.
let express   = require('express');
let router    = express.Router();
let questionsRouter = require('./v1/questions.route');
let optionsRouter   = require('./v1/options.route');

// Routing questions to it's separate router.
router.use('/questions/', questionsRouter);

// Routing options to it's separate router.
router.use('/options/', optionsRouter);

// 404 page for routing that is unavailable.
router.get('/*', (req, res)=>{
    res.status(404).send({
        status : 404,
        message: "Couldn't find the resource you are looking."
    });
});

// Exporting the module.
module.exports = router;
