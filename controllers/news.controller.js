const News = require('../models/News');
const Comment = require('../models/Comment');
const User = require('../models/User');
/*
exports.news_create = function (req, res,next) {
    let news = new News(
        {
            userId : req.body.id,
            topic: req.body.topic,
            description: req.body.description,
            postedDate : req.body.postedDate
        }
    );

    news.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('News Created successfully')
    })
};*/

exports.news_create = function (req, res,next) {
    let news = new News(req.body);
    news.save()
        .then(news => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
}
/*
exports.news_read = function (req, res,next) {
    News.find({topic : req.params.topic}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};
*/

exports.news_read = function (req, res,next) {
    let id = req.params.id;
    News.findById(id, function(err, news) {
        res.json(news);
    });
};


exports.news_update = function (req, res,next) {
    News.findById(req.params.id, function(err, news) {
        if (!news)
            res.status(404).send("data is not found");
        else
        news.news_topic = req.body.news_topic;
        news.news_description = req.body.news_description;

        news.save().then(news => {
            res.json('News updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};




exports.news_delete = function (req, res,next) {
    News.findById(req.params.id, function (err,news) {
    if (!news)
        res.status(404).send("data is not found");
    else
    news.delete().then(news => {
        res.json('News deleted!');
    })
        .catch(err => {
            res.status(400).send("Delete not possible");
        });
    });
};

/*
exports.news_readAll = function (req, res,next) {
    News.findOne({_id:req.params._id}, function (err, news) {
        if (err) return next(err);
        res.send(news.comments);
    })
};
*/

exports.news_readAll = function (req, res,next) {
    News.find(function(err, news) {
        if (err) {
            console.log(err);
        } else {
            res.json(news);
        }
    });
};

exports.news_add_comment = function(req,res,next){
    let comment = new Comment({
        userId: "String",
        body : "body"
        }
    )

/*
    var query = User.findOne({'id':req.body._id});
    query.select('ban');
    console.log(query);
    if(query['ban']==='false' || query['ban']===  false ){
    News.update({_id:req.body._id}, {$push: {comments: comment} }, function (err, news) {
        if (err) return next(err);
        res.send('News udpated.');
    })}
    else
        {
            res.send('You are banned');
       }*/
    User
        .findOne({ _id:req.body._id })
        //.select({'ban':false})
        .exec(function (err, user) {
            if (err) return new Error('something bad happened');
                if(!user.ban){
                    News.update({_id: req.body._id}, {$push: {comments: comment}}, function (err, news) {
                        if (err) return next(err);
                        res.send('News udpated.');
                    } )

                }
                else{
                    res.send("You are banned.")
                  }}
        )};



            /*User
                .findOne({ id:req.body._id })
                .populate('author') //This populates the author id with actual author information!
                .exec(function (err, story) {
                    if (err) return handleError(err);
                    console.log('The author is %s', story.author.name);

                });*/
/*
  User.findByIdAndUpdate(req.params.id, {username: req.params.username}, function (err, user) {
        if (err) return next(err);
        res.send('Username udpated.');
    });
exports.bookRating_update = function (req, res,next) {
    BookRating.update({bookId : req.params.id},{bookRating: req.params.bookRating}, function (err, bookRating) {
        if (err) return next(err);
        res.send('BookRating udpated.');
    });


};
exports.news_readAll_comments = function (req, res,next) {
    News.find({topic : req.params.topic}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};
exports.news_create = function (req, res,next) {
    let news = new News(
        {
            userId : req.body.id,
            topic: req.body.topic,
            description: req.body.description,
            postedDate : req.body.postedDate
        }
    );

    news.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('News Created successfully')
    })
};
*/


