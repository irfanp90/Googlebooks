import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Dummy from "./pages/dummy"
import Saved from "./pages/Saved"
function App() {
  return (
    <Router>
      <div>
        

        <Switch>
          <Route exact path="/" component={Dummy} /> 
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

