var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClassSchema = new Schema({
    name: {type: String, required: true},
    startdate: {type: Date, required: true},
    enddate: {type: Date, required: true}
    //removing until we can test functionality
    //student: [],
    //assignment: [],
    //user: []
});

module.exports = mongoose.model('Class', ClassSchema);