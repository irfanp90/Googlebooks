import React from "react";

function Save(props){
return (
    <div className="card">
    <div className="card-header">
        Result
    </div>
    <div className="card-body">
      <h5 className="card-title"> {props.title}</h5>
      <img src={props.src} alt={props.title}style={{ float: "left"}} className="img-thumbnail"></img>
      
      <button onClick={props.handleDeleteBook} style={{ float: "right", marginRight: 100, color:"black"}}className="btn btn-primary btn-lg">DELETE</button>
      <p className="card-text"> Authors(s): {props.authors}.</p>
      <p className="card-text"> Google Link: <a href={props.link} target={"_blank"}>{props.title}</a></p>
      <p className="card-text"> Description: {props.description}</p>

    </div>
  </div>

)
}

export default Save;