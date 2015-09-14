var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClassSchema = new Schema({
    name: {type: String, required: true},
    startdate: {type: Date, required: true},
    enddate: {type: Date, required: true},
    student: [],
    assignment: []
});

module.exports = mongoose.model('Class', ClassSchema);