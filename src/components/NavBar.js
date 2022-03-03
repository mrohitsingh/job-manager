import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Job Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
              <NavLink className="nav-link" to="/preview">
                Preview
              </NavLink>
            </Nav>
            <Nav className="ml-auto">
              <NavLink className="nav-link" variant="light" to="/addjob">
                Add Job
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
