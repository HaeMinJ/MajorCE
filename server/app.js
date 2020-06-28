var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hmUtils = require('./config/hmUtil');
var s3_put = require('./config/s3_put');
var connection = hmUtils.connection;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(hmUtils.checkToken);
app.use(s3_put.upload.single('file'));
app.use('/uploads', express.static('uploads'));

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);
const profileRouter = require('./routes/profile');
app.use('/profile',profileRouter);

const eventRouter = require('./routes/event');
app.use('/event', eventRouter);
const communityRouter = require('./routes/community');
app.use('/community', communityRouter);
const testRouter = require('./routes/test');
app.use('/test',testRouter);
const paymentRouter = require('./routes/payment');
app.use('/payment',paymentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

sqlAlert = setInterval(function() {
  connection.query("SELECT 1");
}, 1000);

module.exports = app;
