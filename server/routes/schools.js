var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var School = require('../models/school');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/school.html'));
//});

router.post("/", function (req, res, next){
    console.log("Made it to school post! ", req.body);
    var school = new School({name: req.body.name, address: req.body.address, district: req.body.district, phone: req.body.phone, email: req.body.email, contactperson: req.body.contactperson});
    school.save(function(err){
        if(err) console.log('error: ', err);
        res.send(school.toJSON());
    });
    console.log(res)
});

router.get("/getschools", function(req,res,next){
    return School.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;