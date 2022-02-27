import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <navLink>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/preview">Preview</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
      </navLink>
    </div>
  );
}

export default NavBar;
