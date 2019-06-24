const BookRating = require('../models/BookRating');
const Book=require('../models/Book');


exports.bookRating_create = function (req, res,next) {
    let bookRating = new BookRating(
        {
            bookId: req.params.id,
            bookRating : req.params.bookRating,
            ratingDate : req.params.ratingDate
        }
    );

    bookRating.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('BookRating Created successfully')
    })
};

exports.bookRating_read = function (req, res,next) {
    BookRating.find({bookId: req.params.id}, function (err, bookRating) {
        if (err) return next(err);
        res.send(bookRating);
    })
};

exports.bookRating_update = function (req, res,next) {
    BookRating.update({bookId : req.params.id},{bookRating: req.params.bookRating}, function (err, bookRating) {
        if (err) return next(err);
        res.send('BookRating udpated.');
    });


};
/*
exports.bookRating_delete = function (req, res,next) {

    BookRaiting.deleteOne({bookId : {bookName: req.params.bookName}}, function (err,bookRating) {
        if (err) return next(err);
        res.send('BookRating deleted successfully!');
    })

};*/

/*
exports.bookRating_delete = function (req, res,next) {
    var temp;
    Book.find({bookName: req.params.bookName}, function (err,book) {
        temp=book._id;
    })
    BookRating.deleteOne({bookId : temp.toString()}, function (err,bookRating) {
        if (err) return next(err);
        res.send('BookRating deleted successfully!');
    })

};*/

exports.bookRating_delete = function (req, res,next) {
    BookRating.deleteOne({bookId : req.params.id}, function (err,bookRating) {
        if (err) return next(err);
        res.send('BookRating deleted successfully!');
    })

};

exports.bookRating_readAll = function (req, res,next) {
    BookRating.find({}, function (err, bookRating) {
        if (err) return next(err);
        res.send(bookRating);
    })
};
