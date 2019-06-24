var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var config = require('../config/config');
var mongoose = require('mongoose');

//var User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) =>{
    User.findById(id).then(user => {
        done(null, user)
    })
});

passport.use(
    new GoogleStrategy({
            clientID : config.client_id,
            clientSecret : config.client_secret,
            callbackURL :"/login"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then((currentUser) =>{
                if(currentUser){
                    console.log('user is:', currentUser);
                    done(null, currentUser)
                }else{
                    new User({
                        username: profile.displayName,
                        googleId : profile.id,
                        email : profile.emails[0].value,
                        picture: profile._json.image.url,
                        userType: "USER"
                    })
                        .save()
                        .then(user => done(null, user))
                }
            })
        })
);
