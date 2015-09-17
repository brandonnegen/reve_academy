var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AssignmentSchema = new Schema({
    name: {type: String, required: true},
    grade: {type: Number},
    completion: {type: String}
    //removing until we can test functionality
    //student: [],
    //class: []
});

AssignmentSchema.pre('create', function(next){
    console.log("PreSave");
    next();
});

module.exports = mongoose.model('Assignment', AssignmentSchema);