var express = require('express');
var router = express.Router();
var path = require('path');
var Students = require('../models/student');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/admin-classes.html'));
//});


router.get("/getstudents", function(req,res,next){
    return Students.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.post("/poststudents", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    var student = new Students({id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, gender: req.body.gender, race: req.body.race, ethnicity: req.body.ethnicity, gradelevel: req.body.gradelevel, age: req.body.age, softskillspre: req.body.softskillspre, softskillspost: req.body.softskillspost, classcompletion: req.body.classcompletion});
    student.save(function(err){
        if(err) console.log('error: ', err);
        res.send(student.toJSON());
    });
});

module.exports = router;