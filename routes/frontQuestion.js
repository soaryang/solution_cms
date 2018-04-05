var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    //res.render('frontQuestion/tagList', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('frontQuestion/questionAdd', { title: 'Express' });
});
module.exports = router;
