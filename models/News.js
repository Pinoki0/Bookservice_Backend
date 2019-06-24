var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var newsSchema = new Schema({
    userId : String,
    topic: {type:String, required:true},
    description:{type:String, required:true},
    postedDate : {type: Date, default: Date.now},
    comments: [{type: Object}]
});
*/

let newsSchema = new Schema({
    news_topic: {
        type: String
    },
    news_description: {
        type: String
    }
});





module.exports = mongoose.model('News', newsSchema);

