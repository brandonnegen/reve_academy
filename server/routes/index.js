var express = require('express');
var path = require('path');
var router = express.Router();

var passport = require('passport');

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(500).json({err: err});
        }
        if (!user) {
            return res.status(401).json({err: info});
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({err: 'Could not log in user'});
            }
            var role = '';
                role = req.user.role;
                res.cookie('userinfo', JSON.stringify({
                    role: role

                }));
                console.log(role);
            res.status(200).json({status: 'Login successful!'});


        });
    })(req, res, next);
});

// User Registration
router.post('/register', function(req,res,next) {
    User.create(req.body, function (err, post) {
        if (err)
            next(err);
        else
            console.log('user registered!');
        res.redirect('/');
    })
});

// User Logout
router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({status: 'Bye!'});
});


router.get('/*',function(req,res,next){

    var file = req.params[0] || '/assets/views/index.html';
    res.sendFile(path.join(__dirname, '../public',file));
});

module.exports = router;
