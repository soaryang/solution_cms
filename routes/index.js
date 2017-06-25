var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('question/tagList', { title: 'Express' });
});*/

/**跳转到登录页*/
router.get('/login', function(req, res, next) {
   res.render('login');
    //res.redirect('/login');
});

module.exports = router;
