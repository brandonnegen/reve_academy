var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Assignments = require('../models/assignment');

router.delete("/:id", function(req, res, next){
    console.log("Server " + req.params.id + req.body);
    Assignments.findByIdAndRemove(req.params.id, req.body, function(err, assignment){
        return Assignments.find({}).exec(function(err, assignment){
            if(err) throw new Error(err);
            res.send(JSON.stringify(assignment));
        });
    });
});


router.post("/postassignments", function (req, res, next){
    var assignment = new Assignments({name: req.body.name, grade: req.body.grade, completion: req.body.completion});
    assignment.save(function(err){
        if(err) console.log('error: ', err);
        res.send(assignment.toJSON());
    });
});

router.put("/updateassignments/:id", function(req, res, next){
    Assignments.findByIdAndUpdate(req.params.id, req.body, function(err, assignment){
        return Assignments.find({}).exec(function(err, assignment){
            if(err) throw new Error(err);
            res.send(JSON.stringify(assignment));
        });
    });
});


router.get("/getassignments", function(req,res,next){
    return Assignments.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;