import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given title
  searchBooks: function(title) {
    return axios.post("/api/search", {title:title});
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  addBookToDB: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
