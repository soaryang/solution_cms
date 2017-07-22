var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/admin/', function(req, res, next) {
    res.render('question/tagList', { title: 'Express' });
});

/**跳转到登录页*/
router.get('/login', function(req, res, next) {
   res.render('login');
    //res.redirect('/login');
});

module.exports = router;
