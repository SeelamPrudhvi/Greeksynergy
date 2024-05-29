import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/company">Company Info</Link>
        </li>
        <li style={{}}>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
