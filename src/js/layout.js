import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Certifications } from "./views/Certifications";
import { Projects } from "./views/Projects";
import injectContext from "./store/appContext";
import { AboutMe } from "./views/AboutMe";
import { Contact } from "./views/Contact";

import { NavbarComp } from "./component/navbarComp";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<NavbarComp />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/projects">
						<Projects />
					</Route>
					<Route exact path="/certifications">
						<Certifications />
					</Route>
					<Route exact path="/aboutMe">
						<AboutMe />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
