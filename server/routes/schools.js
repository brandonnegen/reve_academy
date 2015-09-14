var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Schools = require('../models/school');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/school.html'));
//});

router.post("/schools", function (req, res, next){
    console.log("Made it to school post! ", req.body);
    Schools.create(req.body, function(err, post){
        res.send("Yes.");
    });
});

module.exports = router;