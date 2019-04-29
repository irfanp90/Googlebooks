import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";
import { Input,FormBtn } from "../components/Form"
import API from "../utils/API"
class Search extends React.Component {
  state = {
   bookData: [],
   search:""
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", description: "", img: "", link: ""  })
      )
      .catch(err => console.log(err));
  }
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
   };

render(){
return(
    <div>
    <Navbar />
    <Jumbotron>
    <span>(React) Google Books Search</span>
    <h1>search FOR & SAVE books of Interest</h1>
    </Jumbotron>
    <form>
    <Input
      value={this.state.search}
      onChange={this.handleInputChange}
      name="search"
      placeholder="Search for a book..."
    />
    <FormBtn
              
onClick={this.handleFormSubmit}
              >
               SEARCH BOOK
              </FormBtn>
    </form>
</div>
);
}
}

export default Search;