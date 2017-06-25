var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('question/tagList', { title: 'Express' });
});

router.get('/tagAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/tagAdd', { title: 'Express' });
});

router.get('/questionList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/questionList', { title: 'Express' });
});

router.get('/questionAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/questionAdd', { title: 'Express' });
});

router.get('/solutionList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/solutionList', { title: 'Express' });
});

router.get('/solutionAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/solutionAdd', { title: 'Express' });
});

module.exports = router;
