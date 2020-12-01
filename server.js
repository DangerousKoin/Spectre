var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
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

=======
// session middleware
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var itemsRoutes = require('./routes/items');

// create the Express app
var app = express();
>>>>>>> parent of 97d68ce... New Routing In Progress

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


// mount all routes with appropriate base paths
app.use('/', indexRoutes);
<<<<<<< HEAD
=======
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);


// ERROR MESSAGING //
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
>>>>>>> parent of 97d68ce... New Routing In Progress


// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
