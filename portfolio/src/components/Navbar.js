import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 150 128"><rect width="100%" height="100%" fill="#0d0d0d"/><path fill="#cd5ff8" d="m68.625 52.98-2.51 4.77q-.45.79-.96 1.14-.5.36-1.25.36-.79 0-1.71-.58t-2.19-1.3q-1.28-.71-2.98-1.29-1.71-.58-4.03-.58-2.1 0-3.68.5-1.57.51-2.64 1.41t-1.6 2.16q-.52 1.25-.52 2.75 0 1.91 1.07 3.19t2.83 2.18 4.01 1.61 4.61 1.52q2.37.8 4.62 1.87t4.01 2.7 2.83 4q1.07 2.36 1.07 5.73 0 3.68-1.26 6.88-1.25 3.21-3.67 5.59t-5.91 3.75-7.99 1.37q-2.58 0-5.1-.51-2.51-.5-4.82-1.44-2.3-.94-4.33-2.25-2.02-1.31-3.6-2.92l2.97-4.84q.37-.53.97-.88.6-.36 1.28-.36.93 0 2.02.77t2.59 1.7q1.5.94 3.5 1.71 2.01.77 4.82.77 4.32 0 6.68-2.04 2.36-2.05 2.36-5.87 0-2.14-1.07-3.49t-2.83-2.27-4.01-1.56q-2.25-.63-4.58-1.38-2.32-.75-4.57-1.8t-4.01-2.74q-1.77-1.69-2.83-4.22-1.07-2.53-1.07-6.24 0-2.97 1.18-5.78t3.43-4.98q2.25-2.18 5.55-3.49t7.57-1.31q4.8 0 8.85 1.5t6.9 4.19m19.84 22.17h7.54q2.77 0 4.84-.7 2.06-.69 3.43-1.98 1.37-1.3 2.04-3.15.68-1.86.68-4.15 0-2.17-.68-3.94-.67-1.76-2.02-3-1.35-1.23-3.42-1.89-2.06-.65-4.87-.65h-7.54zm-10.09-27.27h17.63q5.44 0 9.41 1.28 3.98 1.28 6.56 3.56 2.59 2.29 3.85 5.48 1.25 3.18 1.25 6.97 0 3.94-1.31 7.22t-3.94 5.65q-2.62 2.36-6.58 3.67-3.95 1.31-9.24 1.31h-7.54v19.09h-10.09z"/></svg>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

           

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
