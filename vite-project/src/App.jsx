import React from "react";
import Nav from "./Comp/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    
    <Router>
      <div>
        <Nav></Nav>
      </div>
    </Router>
  );
}

