import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarCus from "./pages/NavbarCus";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App mx-auto">
      <div className="container-fluid p-0">
        <NavbarCus />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
