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

router.put("/gradestudents", function(req, res, next){
    for(i = 0; i < req.body.length; i++){
        console.log("IDs and whatnot", req.body[i]._id);
        Students.findByIdAndUpdate(req.body[i]._id, req.body[i], function(err, post){
            if(err) console.log("ERR: ", err);
        });
    }
    res.send("Grade Post Finished");
});

router.put("/updatestudents/:id", function(req, res, next){
    Students.findByIdAndUpdate(req.params.id, req.body, function(err, student){
        return Students.find({}).exec(function(err, student){
            if(err) throw new Error(err);
            res.send(JSON.stringify(student));
        });
    });
});

router.post("/poststudents", function (req, res, next){
    var student = new Students({
        studentid: req.body.studentid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        race: req.body.race,
        ethnicity: req.body.ethnicity,
        gradelevel: req.body.gradelevel,
        age: req.body.age,
        classes: req.body.classes,
        softskillspregrade: req.body.softskillspregrade,
        preassessmentgrade: req.body.preassessmentgrade,
        storyboardgrade: req.body.storyboardgrade,
        websitegrade: req.body.websitegrade,
        softskillspostgrade: req.body.softskillspostgrade,
        postassessmentgrade: req.body.postassessmentgrade,
        classcompletion: req.body.classcompletion
    });
    student.save(function(err){
        if(err) console.log('error: ', err);
        res.send(student.toJSON());
    });
});

router.delete("/:id", function(req, res, next){
    Students.findByIdAndRemove(req.params.id, req.body, function(err, student){
        return Students.find({}).exec(function(err, student){
            if(err) throw new Error(err);
            res.send(JSON.stringify(student));
        });
    });
});

module.exports = router;