var express = require('express');
var router = express.Router();
var path = require('path');
var Classes = require('../models/class');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/admin-classes.html'));
//});

router.post("/classes", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    Classes.create(req.body, function(err, post){
        res.send("Yes.");
    });
});

router.get("/getclasses", function(req,res,next){
    return Classes.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

module.exports = router;