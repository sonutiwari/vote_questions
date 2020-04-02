let questionsController = {};
questionsController.dummy = (req, res) => {
    return res.send({
        status: 200,
        message: "OK"
    });
}

module.exports = questionsController;