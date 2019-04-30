import React from "react";

function Result(props){
return (
    <div className="card">
    <div className="card-header">
        Result
    </div>
    <div className="card-body">
      <h5 className="card-title"> {props.title}</h5>
      <img src={props.src} alt={props.title}style={{ float: "left"}} class="img-thumbnail"></img>
      <a href="#" style={{ float: "right", marginRight: 100, color:"black"}} class="btn btn-primary btn-lg">VIEW</a>
      <a href="#" style={{ float: "right", marginRight: 100, color:"black"}}class="btn btn-primary btn-lg">SAVE</a>
      <p className="card-text"> Authors(s): {props.authors}.</p>
      <p className="card-text"> Google Link: <a href={props.link} target={"_blank"}>{props.title}</a></p>
      <p className="card-text"> Description: {props.description}</p>

    </div>
  </div>

)
}

export default Result;