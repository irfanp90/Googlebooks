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
    <span>(React) Google Books Search</span>
    <h1>search FOR & SAVE books of Interest</h1>
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