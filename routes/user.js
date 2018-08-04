var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('user/userList', { title: 'Express' });
});

router.get('/userList', function(req, res, next) {
    res.render('user/userList', { title: 'Express' });
});

router.get('/userEdit', function(req, res, next) {
    res.render('user/userEdit', { title: 'Express' });
});

router.get('/roleList', function(req, res, next) {
    res.render('user/roleList', { title: 'Express' });
});
router.get('/roleAdd', function(req, res, next) {
    res.render('user/roleAdd', { title: 'Express' });
});


module.exports = router;
