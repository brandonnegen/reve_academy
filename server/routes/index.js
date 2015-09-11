var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/*',function(req,res,next){
   console.log('router hit')
    var file = req.params[0] || '/assets/views/index.html';
    res.sendFile(path.join(__dirname, '../public',file));
});

module.exports = router;
