import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AirlineShowPage from "./components/airlines/AirlineShowPage";
import Home from "./components/static/Home";
import NavBar from "./components/static/NavBar";



function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/airlines/:id">
            <AirlineShowPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
