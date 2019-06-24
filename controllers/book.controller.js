const Book = require('../models/Book');

/*
exports.book_create = function (req, res,next) {
  //  if(req.isAuthenticated()) {
        let book = new Book(
            {
                bookName: req.body.bookName,
                genre: req.body.genre,
                premiereDate: req.body.premiereDate
            }
        );
        book.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Book Created successfully')
        })
    //} else {
   //     res.redirect('/')
   // }
};*/
exports.book_create = function (req, res,next) {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
};

exports.book_read = function (req, res,next) {
    Book.find({book_genre:req.body.book_genre})
        .then(One =>{
            res.json(One);
        })
        .catch(err => {
            res.status(400).send('book doesnt exist');
        });
};

exports.book_update = function (req, res,next) {
    Book.update({bookName : req.params.bookName},{genre: req.params.genre}, function (err, book) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Book udpated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.book_delete = function (req, res,next) {
    Book.deleteOne({bookName : req.params.bookName}, function (err,book) {
        if(req.isAuthenticated()) {
        if (err) return next(err);
        res.send('Book deleted successfully!');
        } else {
            res.redirect('/')
        }
    })

};

exports.book_readAll = function (req, res,next) {
    Book.find(function(err, books) {
        if (err) {
            console.log(err);
        } else {
            res.json(books);
        }
    });
};

exports.book_by_genre = function (req,res,next){

    Book.find({genre: req.params.bookGenre}, function (err, book) {
        console.log(req.params.bookGenre);
        if (err) return next(err);
        res.send(book);
    })
};
