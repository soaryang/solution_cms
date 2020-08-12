var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.cookies.auth_key!=null && req.cookies.auth_key!=undefined){
        res.render('tag/list', { title: 'Express' });
    }else{
        res.render('login', { title: 'Express' });
    }
});
/**跳转到登录页*/
router.get('/login', function(req, res, next) {
   res.render('login');
    //res.redirect('/login');
});

module.exports = router;
