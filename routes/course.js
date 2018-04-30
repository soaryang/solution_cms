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

router.get('/courseContentAdd/:id', function(req, res, next) {
    res.render('course/courseContentAdd',  { courseId: req.params.id });
});
router.get('/courseContentEdit/:id', function(req, res, next) {
    res.render('course/courseContentEdit',  { id: req.params.id });
});

router.get('/courseContentList/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('course/courseContentList', { courseId: req.params.id });
});
module.exports = router;
