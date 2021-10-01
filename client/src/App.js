import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AirlineShowPage from "./components/airlines/AirlineShowPage";
import Home from "./components/static/Home";
import Login from "./components/static/Login";
import NavBar from "./components/static/NavBar";



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginUser = user => {
    setCurrentUser(user)
  }

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login loginUser={loginUser} />
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
