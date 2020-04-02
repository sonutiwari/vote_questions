// import libraries.
let optionsModel  = require('../models/options.model');

// Declare object.
let optionController = {};

// Delete method.
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

// Add vote method.
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

// Export module.
module.exports = optionController;
