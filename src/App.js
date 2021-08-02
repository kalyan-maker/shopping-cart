import React from "react";
import "./App.css";
import NavbarComp from "./components/Navbar/Navbar"; // import NavabraComp from navbar
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // custom react-router-dom
import Home from "./components/pages/Home"; //import Home component
import About from "./components/pages/About"; // import About component
import HomeSection from "./components/pages/HomeSection"; // import homesection
import Error from "./Error";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/">
          <HomeSection />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
