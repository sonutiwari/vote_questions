let questionModel = require('../models/questions.model');
let optionsModel  = require('../models/options.model');
let optionController = {};
optionController.deleteOption = async (req, res) => {
    let id = req.params.id;
    try {
        await optionsModel.deleteOne({id: id});
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error" + error
        });
    }
    return res.status(200).send({
        status: 200,
        message: "Option deleted successfully"
    });
}

optionController.addVote = async (req, res) => {
    try {
        optionsModel.findOneAndUpdate({id :req.params.id}, {$inc : {'votes' : 1}}).exec();
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error" + error
        });
    }
    return res.status(200).send({
        status: 200,
        message: "Vote added successfully"
    });
}

module.exports = optionController;
