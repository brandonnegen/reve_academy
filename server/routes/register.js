var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.get("/getteachers", function(req,res,next){
    return Users.find({}).exec(function(err, info){
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.post("/postteachers", function (req, res, next){
    var teacher = new Users({username: req.body.username, password: req.body.password, firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, email: req.body.email, school: req.body.school});
    teacher.save(function(err){
        if(err) console.log('error: ', err);
        res.send(teacher.toJSON());
    });
});

router.delete("/:id", function(req, res, next){
    Users.findByIdAndRemove(req.params.id, req.body, function(err, user){
        return Users.find({}).exec(function(err, user){
            if(err) throw new Error(err);
            res.send(JSON.stringify(user));
        });
    });
});

router.put("/updateteachers/:id", function(req, res, next){
    Users.findByIdAndUpdate(req.params.id, req.body, function(err, teacher){
        return Users.find({}).exec(function(err, teacher){
            if(err) throw new Error(err);
            res.send(JSON.stringify(teacher));
        });
    });
});

router.get("/", function (req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/assets/views/register.html'));
});

router.post("/", function (req, res, next){
    Users.create(req.body, function(err, post){
        if(err) next(err);
        else res.sendFile(path.resolve(__dirname, '../public/assets/views/index.html'));
    });
});

module.exports = router;