var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var bookSchema = new Schema({
    bookName : {type:String, required:true},
    genre : {type:String, required:true},
    premiereDate: {type: Date, default: Date.now}
});
*/
let bookSchema = new Schema({
    book_name: {
        type: String
    },
    book_genre: {
        type: String
    },
    book_description: {
        type: String
    },
    book_premiere_date: {
        type: Date
    },
    book_rating: {
        type: Number,  min:1,max:5
    }
});


module.exports=mongoose.model('Book', bookSchema);