var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true },
    gender: {type: String, required: true },
    race: {type: String, required: true },
    ethnicity: {type: String, required: true },
    gradelevel: {type: Number, required: true },
    age: {type: Number, required: true },
    class: [],
    assignment: [],
    softskillspre: {type: Number, required: true },
    softskillspost: {type: Number, required: true },
    school: [],
    classcompletion: {type: Boolean, required: false }

});

module.exports = mongoose.model('Student', StudentSchema);