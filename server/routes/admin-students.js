var express = require('express');
var router = express.Router();
var path = require('path');
var Students = require('../models/student');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/admin-classes.html'));
//});

router.post("/admin-students", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    Students.create(req.body, function(err, post){
        res.send("Yes.");
    });
});

router.get("/getstudents", function(req,res,next){
    return Students.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;