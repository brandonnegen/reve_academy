var express = require('express');
var router = express.Router();
var path = require('path');
var Students = require('../models/student');


router.get("/getstudents", function(req,res,next){
    console.log("made it to the get request");
    return Students.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.put("/poststudents/:id", function(req, res, next){
    console.log("Trying to update in the route");
    Students.findByIdAndUpdate(req.params.id, req.body, {multi:true}, function(err, info){
            console.log("ID", req.params.id);
            console.log("BODY", req.body);
            if(err) throw new Error(err);
            res.send("YES");
        }
    //    {
    //    softskillspregrade: req.body.softskillspregrade,
    //    preassessmentgrade: req.body.preassessmentgrade,
    //    storyboardgrade: req.body.storyboardgrade,
    //    websitegrade: req.body.websitegrade,
    //    softskillspostgrade: req.body.softskillspostgrade,
    //    postassessmentgrade: req.body.postassessmentgrade
    //}
    );
});

router.post("/poststudents", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    var student = new Students({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        race: req.body.race,
        ethnicity: req.body.ethnicity,
        gradelevel: req.body.gradelevel,
        age: req.body.age,
        softskillspregrade: req.body.softskillspregrade,
        preassessmentgrade: req.body.preassessmentgrade,
        storyboardgrade: req.body.storyboardgrade,
        websitegrade: req.body.websitegrade,
        softskillspostgrade: req.body.softskillspostgrade,
        postassessmentgrade: req.body.postassessmentgrade,
        classcompletion: req.body.classcompletion
    });
    console.log("ID", req.body.id);
    student.save(function(err){
        if(err) console.log('error: ', err);
        res.send(student.toJSON());
    });
});

router.delete("/:id", function(req, res, next){
    console.log("Server " + req.params.id + req.body);
    Students.findByIdAndRemove(req.params.id, req.body, function(err, student){
        return Students.find({}).exec(function(err, student){
            if(err) throw new Error(err);
            res.send(JSON.stringify(student));
        });
    });
});

module.exports = router;