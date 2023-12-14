import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleOffcanvasToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid className='navbar'>
            <Navbar.Brand href="#" className="brand">I3D-WAS</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleOffcanvasToggle} />
            <Navbar.Offcanvas
              show={isOffcanvasOpen}
              onHide={() => setIsOffcanvasOpen(false)}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  I3D-WAS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex search">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 bar"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"><SearchOutlinedIcon /></Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#user" className='navlink1'><AccountCircleIcon /> Username</Nav.Link>
                  <Nav.Link href="#notifications" className='navlink2'><NotificationsIcon /></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;