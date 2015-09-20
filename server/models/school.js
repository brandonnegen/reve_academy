var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SchoolSchema = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    address: {type: String, required: true},
    district: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    contactperson: {type: String}
    //student: [],
    //class: [],
    //user: []
});

module.exports = mongoose.model('School', SchoolSchema);