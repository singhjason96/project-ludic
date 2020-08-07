import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SectionOne from "./SectionOne";
import NavBar from "./NavBar";
import GradientBackground from "./GradientBackground";
import HomePage from "./HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import {PeoplePage} from './PeopleData';
import People from './People'

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={PeoplePage} />
        <Route path='/talent' component={People} />
    </BrowserRouter>
  );
}

export default App;
