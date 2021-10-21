import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const Certifications = () => {
	return (
		<Container>
			<Row>
				<Col xs={6} md={4}>
					<Image src="Become_a_React_developer.PNG" rounded />
				</Col>
				<Col xs={6} md={4}>
					<Image src="React_Building_an_Inteface.PNG" rounded />
				</Col>
				<Col xs={6} md={4}>
					<Image src="React Components, Context, and Accessibility.PNG" rounded />
				</Col>
			</Row>
		</Container>
	);
};
