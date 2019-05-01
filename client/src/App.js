import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Search from "./pages/Search"
import Search1 from "./pages/Search"
import Saved from "./pages/Saved"
function App() {
  return (
    <Router>
      <div>
        

        <Switch>
          <Route exact path="/" component={Search1} /> 
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

