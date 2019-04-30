const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    src:{
        type: String
    }, 
    title:{
        type: String
    },
    authors: [String],
    description: {
        type:String
    },
    link: {
       type:String,
    }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;