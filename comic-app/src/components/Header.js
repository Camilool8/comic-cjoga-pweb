import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#4c69f6",
        color: "#fff",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <Navbar.Brand
        style={{
          color: "	#f6db35",
          fontSize: "30px",
          fontWeight: "bold",
        }}
        as={Link}
        to="/"
      >
        Comic App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          style={{
            color: "#f6db35",
            fontSize: "20px",
          }}
          as={Link}
          to="/"
        >
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
