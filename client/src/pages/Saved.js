import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Body";


class Saved extends Component {

render(){
return(
    <div>
    <Navbar />
    <Jumbotron>
    <span>(React) Google Books Search</span>
    <h1>search FOR & SAVE books of Interest</h1>
    </Jumbotron>
    </div>
);
}
}

export default Saved;