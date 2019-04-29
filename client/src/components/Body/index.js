import React from "react";
import bookImage from "../../Images/bk.jpg";

const headerStyle = {
  backgroundImage: `url(${bookImage})`,
  maxWidth: "100vw",
  height: "calc(25vw)",
  backgroundSize: "cover",
  position: "relative",
  color: "black",
  fontWeight:"bold",
  fontSize: "70px",
  textShadow: "1px 1px 2px indianred, 0 0 1em gray, 0 0 0.2em white"
}

function Jumbotron({ children }) {
  return (
    
    <div className="jumbotron text-center" style={headerStyle}>
    <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
}

export default Jumbotron;
