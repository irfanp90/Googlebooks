import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";
import { Input,FormBtn } from "../components/Form"

class Search extends Component {

render(){
return(
    <div>
    <Navbar />
    <Jumbotron>
    <h1>(React) Google Books Search</h1>
    <span>search FOR & SAVE books of Interest</span>
    </Jumbotron>
    <form>
    <Input
      value=""
      onChange=""
      name="search"
      placeholder="Search for a book..."
    />
    <FormBtn
                // disabled={!(this.state.author && this.state.title)}
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