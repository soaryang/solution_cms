var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('article/articleList', { tagId: req.params.id });
});

router.get('/:id', function(req, res, next) {
    res.render('article/articleList', { tagId: req.params.id });
});

router.get('/articleAdd/:id', function(req, res, next) {
    res.render('article/articleAdd', { tagId:req.params.id });
});

router.get('/articleEdit/:id', function(req, res, next) {
    res.render('article/articleEdit', { id:req.params.id });
});

module.exports = router;
