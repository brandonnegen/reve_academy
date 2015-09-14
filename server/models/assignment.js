var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AssignmentSchema = new Schema({
    name: {type: String, required: true},
    grade: {type: Number, required: true},
    completion: {type: Boolean, required: true},
    student: [],
    class: []
});

module.exports = mongoose.model('Assignment', AssignmentSchema);