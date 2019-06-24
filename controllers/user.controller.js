const User = require('../models/User');
//const Book = require('../models/Book')

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            username: req.body.username,
            email: req.body.email,
            ban: req.body.ban
        }
    );
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_readObserved = function (req, res,next) {
    User.findById(req.body.id, function (err, user) {
        if (err) return next(err);
     //   var objToJson = user.observed[0];
    //    objToJson.response = response;
      //  response.write(JSON.stringify(objToJson));
        //res.json({"observed": user.observed});
        console.log(user.observed);
        res.json(user.observed);
    })
    /*  User
          .findOne({ _id:req.body._id })
          .exec(function (err, user) {
              if (err) return new Error('something bad happened');

                  News.update({_id: req.body._id}, {$push: {comments: comment}}, function (err, news) {
                      if (err) return next(err);
                      res.send('News udpated.');
                  } )

              }*/

};



exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.body.id, {username: req.body.username}, function (err, user) {
        if (err) return next(err);
        res.send('Username udpated.');
    });
};

exports.user_readAll = function (req, res,next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_updateFavoriteBook = function (req, res,next) {
    User.findByIdAndUpdate(req.body.id, {$push: {liked : req.body.liked}}, function (err, user) {
        if (err) return next(err);
        res.send('You like this book.');
    });
};
exports.user_updateObservedUser = function (req, res, next) {
    User.findByIdAndUpdate(req.body.id, {$push: {observed : req.body.observed}}, function (err, user) {
        if (err) return next(err);
        res.send('You are following this person.');
    });
};

exports.user_banUser = function (req, res, next) {
   /* if(req.user['UserType'] == "ADMIN") {
        User.findByIdAndUpdate(req.body.id, {ban: req.body.ban}, function (err, user) {
            if (err) return next(err);
            res.send('Correctly banned user.');
        });
    }
    else
    {
        res.send('You cant do that, only ADMIN');
    }
*/
    User
        .findOne({ _id:req.body._id })
        .exec(function (err, user) {
            if (err) return new Error('something bad happened');
            if(user.userType==="ADMIN"){
                User.findByIdAndUpdate(req.body.id, {ban : 'true'}, function (err, user) {
                    if (err) return next(err);
                    res.send('User banned.');
                } )

            }
            else{
                res.send("You are not Admin.")
            }}
        )};

