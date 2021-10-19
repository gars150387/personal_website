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
						<NavDropdown title="GitHub" id="collasible-nav-dropdown">
							<NavDropdown.Item href="https://github.com/gars150387/Contact_list_Flux_API_BasedOnArticle">
								Contact List
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/todo-list-in-landing-page-react-flux">
								To-Do List
							</NavDropdown.Item>
							<NavDropdown.Item href="https://github.com/gars150387/simple-counter-exercise-react-hook">
								Simple Counter Exercise
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="https://github.com/gars150387/random-excuse-exercise-javascript">
								Random Excuse Exercise
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Certifications</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
