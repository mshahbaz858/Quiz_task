import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Modal,
  Image,
  NavDropdown,
} from "react-bootstrap";
import logo from "../Assets/logo.svg";
import "../components/Navbar/Navbar.css";
function NavbarCus() {
  // Modaal connect wallet
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Iconcalculate = () => {
    return <FontAwesomeIcon icon={faBars} />;
  };
  return (
    <>
      <div className="w-100 text-center nav_area">
        <Navbar collapseOnSelect expand="lg" variant="white">
          <div className="container-fluid">
            <Navbar.Brand href="#home">
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Dorpee</Nav.Link>
              </Nav>
              <Nav className="nav_cus_right ">
                <div className="my-auto">
                  <Button
                    className=""
                    style={{
                      backgroundColor: "transparent",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    Find a workplace
                  </Button>
                </div>

                <Nav.Link eventKey={2} href="#memes" className="mt-1">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="navbar_profile"
                  />
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <FontAwesomeIcon icon={faBars} className="navbar_Menu" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarCus;
