var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/user');
var question = require('./routes/question');
var article = require('./routes/article');
var sourceCode = require('./routes/sourceCode');
var tag = require('./routes/tag');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//var ejs = require('ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var authorize = function(req, res, next){
    if(!req.cookies.auth_key){
        return res.redirect('/login');
    } else {
        next();
    }
}

app.use(function(req,res,next){
    console.log('Request URL:', req.originalUrl);
    console.log("log:"+req.host);
    if(req.originalUrl!=="/favicon.ico"){
        if(req.originalUrl.indexOf('/user')!=-1){
            //authorize(req,res,next);
            authorize(req,res,next);
        }else if(req.originalUrl.indexOf('/question')!=-1){
            authorize(req,res,next);
        }else if(req.originalUrl.indexOf('/sourceCode')!=-1){
            authorize(req,res,next);
        }else if(req.originalUrl.indexOf('/tag')!=-1){
            authorize(req,res,next);
        }else if("/login" == req.originalUrl){
            next();
        }else{
            next();
        }
    }
});

app.use('/', index);
app.use('/user', users);
app.use('/question', question);
app.use('/article', article);
app.use('/sourceCode', sourceCode);
app.use('/tag', tag);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found'+req.uri);
  err.status = 404;
    res.render('login');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
