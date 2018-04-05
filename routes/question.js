var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('question/tagList', { title: 'Express' });
});

router.get('/tagList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/tagList', { title: 'Express' });
});

router.get('/tagAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/tagAdd', { title: 'Express' });
});


router.get('/tagEdit/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/tagEdit', { tagId: req.params.id });
});


router.get('/questionList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/questionList', { title: 'Express' });
});

router.get('/questionAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/questionAdd', { title: 'Express' });
});

router.get('/questionEdit/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/questionEdit', { questionId: req.params.id });
});


router.get('/solutionList', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/solutionList', { title: 'Express' });
});

router.get('/solutionAdd', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/solutionAdd', { title: 'Express' });
});

router.get('/solutionEdit', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('question/solutionEdit',{ solutionId: req.params.id });
});

module.exports = router;
