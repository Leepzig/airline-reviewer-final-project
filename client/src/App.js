import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AirlineShowPage from "./components/airlines/AirlineShowPage";
import ReviewShowEdit from "./components/reviews/ReviewShowEdit";
import Home from "./components/static/Home";
import Login from "./components/static/Login";
import NavBar from "./components/static/NavBar";
import Signup from "./components/static/Signup";



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginUser = user => {
    setCurrentUser(user)
  }

  const setUserToNull = () => {
    setCurrentUser(null)
  }

  return (
    <div>
      <Router>
        <NavBar currentUser={currentUser} setUserToNull={setUserToNull}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login loginUser={loginUser} />
          </Route>
          <Route exact path="/airlines/:id">
            <AirlineShowPage currentUser={currentUser}/>
          </Route>
          <Route exact path="/airlines/:id/review/:review_id">
            <ReviewShowEdit currentUser={currentUser}/>
          </Route>
          <Route exact path="/airlines/:id">
            <AirlineShowPage currentUser={currentUser}/>
          </Route>
          <Route exact path="/signup">
            <Signup loginUser={loginUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
