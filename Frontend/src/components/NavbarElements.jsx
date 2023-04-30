import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


import Home from '../pages/Home';
import About from '../pages/about';
import listPSW from '../pages/psw';

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/">About</Nav.Link>
                <Nav.Link as={Link} to="/">Contact</Nav.Link>

              </Nav>

            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </div>
      </Router>
    )
  }
}