var express = require('express');
var path = require('path');
var router = express.Router();

var passport = require('passport');

router.post("/", passport.authenticate('local', {
    successRedirect: "#/admin",
    failureRedirect: "/"
}));

//router.get('/create', function(req, res, next){
//    console.log("Made it here"nod);
//    res.sendFile(path.join(__dirname, "../public/assets/views/another.html"));
//});

router.get('/*',function(req,res,next){
   console.log('router hit');
    var file = req.params[0] || '/assets/views/index.html';
    res.sendFile(path.join(__dirname, '../public',file));
});

module.exports = router;
