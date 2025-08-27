import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import About from "./project/About";
import Login from "./project/Login";
import Project from "./project/Project";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    
      <Container fluid>
         <Router>
      <Navbar>
        <Container fluid className="mb-3 shadow mt-1" style={{backgroundColor:'#1d3557'}} >
            <Nav className="g-2">
              <Nav.Link style={{color:'white'}} as={Link} to="/home">Home</Nav.Link>
              <Nav.Link style={{color:'white'}} as={Link} to="/login">Login</Nav.Link>
              <Nav.Link style={{color:'white'}} as={Link} to="/about">About</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

      <Container fluid className=" p-4  bg-light rounded-4 shadow-lg border border-1">
        <Routes>
          <Route  path="/home"  element={<Project />} />
          <Route  path="/login"  element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
      </Container>
      )
    }
export default App;
