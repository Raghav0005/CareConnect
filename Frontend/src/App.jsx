import React, { Component } from "react";
import About from "./components/About.jsx";
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ListPsw } from './pages/psw.jsx';
import { ConsumerForm } from './pages/form.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">CareConnect</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/ListPsw">PSW List</Nav.Link>
                  <Nav.Link as={Link} to="/ConsumerForm">Form</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        </div>
       <div className="App">
          <Routes>
          <Route path="/" element={<About/>} exact/>
          <Route path="/ListPsw" element={<ListPsw/>}/>
          <Route path="/ConsumerForm" element={<ConsumerForm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}