const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {  // Verify CB
  // A user has logged in via Google OAuth
  User.findOne({ googleId: profile.id }, function (err, user) {
    if (err) return cb(err);
    if (user) {
      return cb(null, user);
    } else {
      // We have a new user!
      const newUser = new User({
        name: profile.displayName,
        first: profile.name.givenName,
        last: profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value,
      });
      newUser.save(function (err) {
        if (err) return cb(err);
        return cb(null, newUser);
      });
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    return done(err, user);
  });
});