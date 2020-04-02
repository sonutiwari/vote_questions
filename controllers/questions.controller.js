let questionModel = require('../models/questions.model');
let optionsModel  = require('../models/options.model');
let questionsController = {};

questionsController.createQuestion = async (req, res) => {
    let id = 0;
    try {
        let maxQues = await questionModel.findOne({}).sort([['id', -1]]).exec();
        id = maxQues.id + 1;
    } catch (error) {
        id = 1;
    }
    let document = new questionModel({
        id: id,
        title: req.body.title,
        options: req.body.options
    });
    try {
        await document.save();
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error"
        });
    }
    return res.status(200).send({
        status: 200,
        message: "Question saved successfully"
    });
    
}


questionsController.createOption = async (req, res) => {
    let options = req.body;
    let id = 0;
    try {
        let maxops = await optionsModel.findOne({}).sort([['id', -1]]).exec();
        id = maxops.id + 1;
    } catch (error) {
        id = 1;
    }
    options.id = id;
    options.votes = 0;
    console.log(req.headers.host, req.protocol);
    options.link  = req.protocol + "://" + req.headers.host + "/options" + "/" + id + "/add_vote";
    console.log(options);
    let document = new optionsModel(options);
    try {
        await document.save();
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "options DB Error"
        });
    }
    try {
        await questionModel.findOneAndUpdate({id: req.params.id}, { $push: { options: document } } );
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error" + error
        });
    }
    return res.status(200).send({
        status: 200,
        message: "Option saved successfully"
    });
}

questionsController.deleteQuestion = async (req, res) => {
    let id = req.params.id;
    try {
        await questionModel.deleteOne({id: id});
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error" + error
        });
    }
    return res.status(200).send({
        status: 200,
        message: "Question deleted successfully"
    });
    
}

questionsController.showAllOptions = async (req, res)=>{
    let id = req.params.id;
    let ans;
    try {
        ans = await questionModel.findOne({id: id}).populate("options");
    } catch (error) {
        return res.status(400).send({
            status: 400,
            message: "DB Error" + error
        });
    }
    return res.status(200).send(ans);
}

module.exports = questionsController;