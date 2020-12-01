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

<<<<<<< HEAD
// session middleware
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
// session middleware
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var itemsRoutes = require('./routes/items');
=======
// require routes
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var itemsRoutes = require('./routes/items');

<<<<<<< HEAD
// create the Express app
var app = express();
=======



>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a

// create the Express app
var app = express();
<<<<<<< HEAD
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6

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
<<<<<<< HEAD
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);
=======
app.use('/', usersRoutes);
app.use('/', itemsRoutes);
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6


// ERROR MESSAGING //
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
<<<<<<< HEAD
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a

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
