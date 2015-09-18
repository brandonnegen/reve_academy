var express = require('express');
var router = express.Router();
var path = require('path');
var Students = require('../models/student');


router.get("/getstudents", function(req,res,next){
    return Students.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.put("/poststudents/_id", function(req, res, next){
    console.log("Trying to update in the route");
    console.log("requestparams", req.params);
    console.log("grade",req.body.softskillspregrade);
    //console.log("otherID", req.body.id);
    //console.log("ThirdID", req.body._id);

    Students.findByIdAndUpdate(req.params._id, {
        softskillspregrade: req.body.softskillspregrade,
        preassessmentgrade: req.body.preassessmentgrade,
        storyboardgrade: req.body.storyboardgrade,
        websitegrade: req.body.websitegrade,
        softskillspostgrade: req.body.softskillspostgrade,
        postassessmentgrade: req.body.postassessmentgrade
    });
    res.send("YES");
});

router.post("/poststudents", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    var student = new Students({id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, gender: req.body.gender, race: req.body.race, ethnicity: req.body.ethnicity, gradelevel: req.body.gradelevel, age: req.body.age, softskillspre: req.body.softskillspre, softskillspost: req.body.softskillspost, classcompletion: req.body.classcompletion});
    console.log("ID", req.body.id);
    student.save(function(err){
        if(err) console.log('error: ', err);
        res.send(student.toJSON());
    });
});

module.exports = router;