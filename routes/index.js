var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('front/index', { title: 'Express' });
});
/* GET home page. */
/*router.get('/question', function(req, res, next) {
    console.log('req.originalUrl'+req.originalUrl);
    res.render('question/questionInfo', { title: 'Express' });
    return res.redirect('/question/questionInfo');
});*/

/*router.get("/question/:id/:bbb",function(req,res,next){
    var id = req.params.id;
    console.log("id:"+id);
    console.log("bb:"+ req.params.bbb);
    res.render('question/questionInfo', { title: 'Express' });
})*/

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
