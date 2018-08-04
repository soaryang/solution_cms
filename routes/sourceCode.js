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

module.exports = router;
