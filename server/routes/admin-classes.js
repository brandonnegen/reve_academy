var express = require('express');
var router = express.Router();
var path = require('path');
var Classes = require('../models/class');




router.get("/getclasses", function(req,res,next){
    return Classes.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.post("/", function (req, res, next){
    var classes = new Classes({name: req.body.name, startdate: req.body.startdate, enddate: req.body.enddate});
    classes.save(function(err){
        if(err) console.log('error: ', err);
        res.send(classes.toJSON());
    });
});

router.put("/updateclasses/:id", function(req, res, next){
    Classes.findByIdAndUpdate(req.params.id, req.body, function(err, Class){
        return Classes.find({}).exec(function(err, Class){
            if(err) throw new Error(err);
            res.send(JSON.stringify(Class));
        });
    });
});

router.delete("/:id", function(req, res, next){
    Classes.findByIdAndRemove(req.params.id, req.body, function(err, Class){
        return Classes.find({}).exec(function(err, Class){
            if(err) throw new Error(err);
            res.send(JSON.stringify(Class));
        });
    });
});


module.exports = router;