var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClassSchema = new Schema({
    name: {type: String, required: true},
    startdate: {type: String, required: true},
    enddate: {type: String, required: true}
    //removing until we can test functionality
    //student: [],
    //assignment: [],
    //user: []
});

module.exports = mongoose.model('Class', ClassSchema);