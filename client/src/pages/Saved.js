import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";


class Saved extends Component {

render(){
return(
    <div>
    <Navbar />
    <Jumbotron>
    <h1>(React) Google Books Search</h1>
    <span>search FOR & SAVE books of Interest</span>
    </Jumbotron>
    </div>
);
}
}

export default Saved;