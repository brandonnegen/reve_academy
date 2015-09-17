var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Assignments = require('../models/assignment');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/school.html'));
//});

router.post("/postassignments", function (req, res, next){
    console.log("Made it to assignment post! ", req.body);
    var assignment = new Assignments({name: req.body.name, grade: req.body.grade, completion: req.body.completion});
    assignment.save(function(err){
        if(err) console.log('error: ', err);
        res.send(assignment.toJSON());
    });
});


router.get("/getassignments", function(req,res,next){
    return Assignments.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;