import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavbarComp = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Gustavo Rodriguez</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">About Me</Nav.Link>
						<Nav.Link href="#pricing">Projects</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Certifications</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
