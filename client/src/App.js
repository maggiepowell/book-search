import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import "./App.css";

function App() {
  return (
    <div>
    <Router>
    <NavTabs />
        <Route exact path="/Saved" component={Saved} />
        <Route exact path="/Search" component={Search} />
    </Router>
    </div>

  );
}


export default App;
