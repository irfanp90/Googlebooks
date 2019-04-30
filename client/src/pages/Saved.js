import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";
import API from "../utils/API";
import Save from "../components/Save";


class Saved extends React.Component  {
    state = {
    bookData:[]
};
componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ bookData: res.data},
            console.log(res.data))
      )
      .catch(err => console.log(err));
  }

  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

render(){
return(
    <div>
    <Navbar />
    <Jumbotron>
    <span>(React) Google Books Search</span>
    <h1>search FOR & SAVE books of Interest</h1>
    </Jumbotron>
    <br></br>
    <br></br>
    <br></br>
      {this.state.bookData.length ?(     
      <span>
         {this.state.bookData.map(book=>(
           <Save
            key={book._id}
            src={book.src}
            title={book.title}
            authors={book.authors ? book.authors.join(", ")
            : "N/A"}
            description={book.description}
            link={book.link}
            handleDeleteBook={() => this.handleDeleteBook(book._id)}
              />
              ))}
              </span>
              ) : (
              <h3>Nothing saved</h3>
            )}

    </div>
);
}
}

export default Saved;