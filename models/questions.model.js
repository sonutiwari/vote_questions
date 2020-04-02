let mongoose = require('mongoose');
let optionsModel = require('./options.model');
let questionsSchema = mongoose.Schema;
let questionSchema = new questionsSchema({
    id: { type: Number, unique: true, required: true },
    title: { type: String, unique: true, required: true },
    options: [{ type: questionsSchema.Types.ObjectId, ref: optionsModel }]
}, {timestamps: true});

let questionModel = mongoose.model("questions", questionSchema);

module.exports = questionModel;
