import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './pages/about.jsx';
import { ListPsw } from './pages/psw.jsx';
import { ConsumerForm } from './pages/form.jsx';
import { Home } from './pages/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Homepage</Nav.Link>
              <Nav.Link as={Link} to="/ListPsw">PSW List</Nav.Link>
              <Nav.Link as={Link} to="/ConsumerForm">Form</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
   <div>
      <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/ListPsw" element={<ListPsw/>}/>
      <Route path="/ConsumerForm" element={<ConsumerForm/>}/>
      <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
 );
}