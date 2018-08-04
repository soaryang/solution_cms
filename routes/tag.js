var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('tag/list', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('tag/list', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('tag/add', { title: 'Express' });
});

router.get('/edit/:id', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('tag/edit', { tagId: req.params.id });
});
module.exports = router;
