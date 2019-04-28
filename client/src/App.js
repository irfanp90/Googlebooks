import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Body from "./components/Body"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Body />

        <Switch>
          {/* <Route exact path="/" component={Books} /> */}
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

