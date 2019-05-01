import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";
import Result from "../components/Result";
import { Input,FormBtn } from "../components/Form"
import API from "../utils/API"
class Search extends React.Component {
  state = {
   bookData: [],
   search:""
  };

  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            bookData: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  
    handleSaveBook = bookData => {
      API.saveBook(bookData)
        .then(res => alert("Book Save!"))
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
    <br></br>
    <br></br>
    <br></br>
      {this.state.bookData.length ?(     
        <span>
         {this.state.bookData.map(book=>(
           <Result
           key={book._id}
           src={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ")
            : "N/A"}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
              
              handleSaveBook={() => this.handleSaveBook({
                
              src:book.volumeInfo.imageLinks.thumbnail,
              title:book.volumeInfo.title,
              authors:book.volumeInfo.authors,
              description:book.volumeInfo.description,
              link:book.volumeInfo.infoLink
              })}
              />
       
              ))}
              </span>
              ) : (
              <h3>No Results to Display</h3>
            )}
        
      
</div>
             
  );
  }
  }

export default Search;