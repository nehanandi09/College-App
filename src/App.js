import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CollegeList from "./components/get-college-list.component";
import CollegeDetails from "./components/college-details.component";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <br />
        <Route path="/college" exact component={CollegeList} />
        <Route path="/details" exact component={CollegeDetails} />
      </div>
    </Router>
  );
}

export default App;
