var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    id: {type: Number, required: true, index: {unique: true}},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true },
    gender: {type: String, required: true },
    race: {type: String, required: true },
    ethnicity: {type: String, required: true },
    gradelevel: {type: Number, required: true },
    age: {type: Number, required: true },
    softskillspre: {type: Number},
    softskillspost: {type: Number},
    classcompletion: {type: String}
    //school: [],
    //class: [],
    //assignment: [],
    //user: []
});

module.exports = mongoose.model('Student', StudentSchema);