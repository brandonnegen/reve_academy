var express = require('express');
var router = express.Router();
var path = require('path');
var Classes = require('../models/class');

//router.get("/", function (req, res, next){
//    res.sendFile(path.resolve(__dirname, '../public/assets/views/admin-classes.html'));
//});


router.get("/getclasses", function(req,res,next){
    return Classes.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.post("/", function (req, res, next){
    console.log("Made it to class post! ", req.body);
    var classes = new Classes({name: req.body.name, startdate: req.body.startdate, enddate: req.body.enddate});
    classes.save(function(err){
        if(err) console.log('error: ', err);
        res.send(classes.toJSON());
    });
});


module.exports = router;