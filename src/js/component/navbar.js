import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<h5>Gustavo Rodriguez</h5>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link to="/">
							<li className="nav-item">
								<h5>Home</h5>
							</li>
						</Link>
						<Link to="/certifications">
							<li className="nav-item">
								<h5>Certifications</h5>
							</li>
						</Link>
						<Link to="/projects">
							<li className="nav-item">
								<h5>Projects</h5>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
