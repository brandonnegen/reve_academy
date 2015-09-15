var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Assignments = require('../models/assignment');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/school.html'));
//});

router.post("/admin-assignments", function (req, res, next){
    console.log("Made it to admin-assignment post! ", req.body);
    Assignments.create(req.body, function(err, post){
        if(err) console.log("HERE IS THE ERR FOO: ", err);
        console.log(post);
        res.send("Yes.");
    });
});

router.get("/getassignments", function(req,res,next){
    return Assignments.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;