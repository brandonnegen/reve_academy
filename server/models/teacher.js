var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeacherSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true },
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    student: [],
    class: [],
    school: []
});

module.exports = mongoose.model('Teacher', TeacherSchema);