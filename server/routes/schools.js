var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var School = require('../models/school');

router.delete("/:id", function(req, res, next){
    School.findByIdAndRemove(req.params.id, req.body, function(err, school){
        return School.find({}).exec(function(err, school){
            if(err) throw new Error(err);
            res.send(JSON.stringify(school));
        });
    });
});

router.post("/", function (req, res, next){
    var school = new School({name: req.body.name, address: req.body.address, district: req.body.district, phone: req.body.phone, email: req.body.email, contactperson: req.body.contactperson});
    school.save(function(err){
        if(err) console.log('error: ', err);
        res.send(school.toJSON());
    });
    console.log(res)
});

router.put("/updateschools/:id", function(req, res, next){
    School.findByIdAndUpdate(req.params.id, req.body, function(err, school){
        return School.find({}).exec(function(err, school){
            if(err) throw new Error(err);
            res.send(JSON.stringify(school));
        });
    });
});


router.get("/getschools", function(req,res,next){
    return School.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;