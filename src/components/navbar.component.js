import React, { Component } from "react";
import { Link } from "react-router-dom"; //link to different routes

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/college" className="navbar-brand">
          CollegeApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav m2-auto">
            <li className="navbar-item">
              <Link to="/details" className="nav-link">
                Colleges
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
