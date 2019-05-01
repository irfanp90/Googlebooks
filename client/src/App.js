import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookSearch from "./pages/BookSearch"
import Saved from "./pages/Saved"
function App() {
  return (
    <Router>
      <div>
        

        <Switch>
          <Route exact path="/" component={BookSearch} /> 
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

