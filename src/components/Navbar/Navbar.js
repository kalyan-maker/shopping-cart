import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap"; // custom react bootstrap
import { Link } from "react-router-dom"; // custom react router-dom

function NavbarComp() {
  return (
    <div className="navigation">
      {/* create a navbar tag */}
      <Navbar expand="lg" variant="light" bg="light">
        {/*  create Container class*/}
        <div className="container px-4 px-lg-5">
          {/*navbar brand */}
          <Navbar.Brand as={Link} to={"/"}>
            Start Bootstrap
          </Navbar.Brand>
          {/* create Button class */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse id="avbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
              <Nav.Link as={Link} to={"/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"}>
                About
              </Nav.Link>
              {/* Drop down components*/}
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.2">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
              {/* closed Drop down components*/}
            </Nav>
            {/*  create form  */}
            <Form className="d-flex">
              <button className="btn btn-outline-dark" type="Submit">
                <i className="bi bi-cart-fill"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </Form>
            {/* closing form */}
          </Navbar.Collapse>
          {/*closing Button  */}
        </div>
        {/*closing container */}
      </Navbar>
      {/* closing Navbar tag*/}
    </div>
  );
}

export default NavbarComp;
