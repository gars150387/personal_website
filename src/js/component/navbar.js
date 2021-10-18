import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary jsutify-content-between">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<Link to="/">
					<p>
						Gustavo Rodriguez <span className="sr-only">(current)</span>
					</p>
				</Link>
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link to="/certifications">
							<p>Certifications</p>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/projects">
							<p>Projects</p>
						</Link>
					</li>
				</ul>
				{/* <form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> */}
			</div>
		</nav>
	);
};
