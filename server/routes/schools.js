var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var Schools = require('../models/school');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/school.html'));
//});

router.post("/schools", function (req, res, next){
    console.log("Made it to school post! ", req.body);
    Schools.create(req.body, function(err, post){
        if(err) next(err);
        else res.sendFile(path.resolve(__dirname, '../../public/assets/views/index.html'));
    });
    console.log(res)
});

router.get("/getschools", function(req,res,next){
    return Schools.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;