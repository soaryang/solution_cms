var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('course/courseList', { title: 'Express' });
});


router.get('/courseList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('course/courseList', { title: 'Express' });
});

router.get('/courseAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('course/courseAdd', { title: 'Express' });
});
module.exports = router;
