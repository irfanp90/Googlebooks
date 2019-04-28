require("env").config();
const db = require("../models");
const axios=require("axios");


module.exports = {
    findAll: function(req, res) {
        db.Book
          .find()
          .then(booksData=> res.json(booksData))
          .catch(err => res.status(422).json(err));
      },

      searchAll: function(req, res) {
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GOOGLE_BOOKS_API}`
        )
       
          .then(response=> res.json(response.data.items))
          .catch(err => res.status(422).json(err));
      },

      create: function(req, res) {
        db.Book
          .create(req.body)
          .then(response => res.json({successful: response}))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Book
          .findByIdAndDelete({ _id: req.params.id })
          .then(response => res.json({successful: response}))
          .catch(err => res.status(422).json(err));
      }

};

