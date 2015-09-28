var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    studentid: {type: Number, required: true, index: {unique: true}},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true },
    gender: {type: String, required: true },
    race: {type: String, required: true },
    ethnicity: {type: String, required: true },
    gradelevel: {type: Number, required: true },
    age: {type: Number, required: true },
    softskillspregrade: {type: Number},
    softskillspostgrade: {type: Number},
    classes: {type: String},
    preassessmentgrade: {type: Number},
    storyboardgrade: {type: Number},
    websitegrade: {type: Number},
    postassessmentgrade: {type: Number},
    softskillspregradecompletion: {type: String},
    preassessmentcompletion: {type: String},
    storyboardcompletion: {type: String},
    websitecompletion: {type: String},
    softskillspostgradecompletion: {type: String},
    postassessmentcompletion: {type: String},
    classcompletion: {type: String}
    //school: [],
    //class: [],
    //assignment: [],
    //user: []
});

module.exports = mongoose.model('Student', StudentSchema);