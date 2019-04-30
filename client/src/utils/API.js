import axios from "axios";
const URL ="https://www.googleapis.com/books/v1/volumes?q=";
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given title
  searchBooks: function(query) {
    return axios.get(URL + query);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
