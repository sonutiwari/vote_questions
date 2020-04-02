let mongoose = require('mongoose');
let optionSchema = mongoose.Schema;
let optionsSchema = new optionSchema({
    id: { type: Number, unique: true, required: true },
    text: { type: String, required: true },
    votes: { type: Number, min: 0 },
    link: { type: String, required: true }
});

let optionModel = mongoose.model("options", optionsSchema);

module.exports = optionModel;
