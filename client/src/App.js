import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/static/Home";
import NavBar from "./components/static/NavBar";



function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
