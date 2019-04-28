import React from "react";


function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
    <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
}

export default Jumbotron;
