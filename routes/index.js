var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('front/index', { title: 'Express' });
});

router.get('/join', function(req, res, next) {
    res.render('front/join', { title: 'Express' });
});

router.get("/question/:id",function(req,res,next){
    var id = req.params.id;
    console.log("id:"+id);
    res.render('front/questionInfo', { questionId: id });
})

/**跳转到登录页*/
router.get('/login', function(req, res, next) {
   res.render('login');
    //res.redirect('/login');
});

module.exports = router;
