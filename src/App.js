import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/Pages/About/About";
import Education from "./components/Pages/Education/Education";
import Experience from "./components/Pages/Job/Experience";
import Project from "./components/Pages/Project/Project";
import Skill from "./components/Pages/Tech/Skill";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path="/Home/" exact component={Home} />
          <Route path="/About/" component={About} />
          <Route path="/Education/" component={Education} />
          <Route path="/Experience/" component={Experience} />
          <Route path="/Skill/" component={Skill} />
          <Route path="/Project/" component={Project} />
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
