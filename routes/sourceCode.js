var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('sourceCode/sourceCodeList', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
    res.render('sourceCode/sourceCodeList', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
    res.render('sourceCode/sourceCodeEdit', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    res.render('sourceCode/sourceCodeAdd', { title: 'Express' });
});

module.exports = router;
