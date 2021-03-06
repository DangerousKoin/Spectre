var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// session middleware
var indexRoutes = require('./routes/indexRoute');
var userRoutes = require('./routes/userRoute');
var adminRoutes = require('./routes/adminRoute');

// create the Express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware that passes req.user to all templates
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/', userRoutes);
app.use('/', adminRoutes);


// ERROR MESSAGING //
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
  res.render('redirects/error');
});

module.exports = app;
