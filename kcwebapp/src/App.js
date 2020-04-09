import React from 'react';
import { Route, Switch } from "react-router";
import './Assets/CSS/App.css';
import NavBar from "./Components/Partial/navbar"
import HomePage from "./Components/home"
import AboutPage from "./Components/about"

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
    </>
  );
}

export default App;
