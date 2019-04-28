const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/search"
router.route("/")
  .post(booksController.searchAll);
  

  
module.exports = router 