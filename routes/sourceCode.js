var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('sourceCode/list', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
    res.render('sourceCode/list', { title: 'Express' });
});

router.get('/edit/:id', function(req, res, next) {
    res.render('sourceCode/edit',  { id: req.params.id });
});

router.get('/add', function(req, res, next) {
    res.render('sourceCode/add', { title: 'Express' });
});
router.get('/add/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('sourceCode/add', { tagId: req.params.id });
});

module.exports = router;
