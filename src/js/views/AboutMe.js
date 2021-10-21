import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export const AboutMe = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image className="justify-content-end" src="gustavo-san-francisco.jpg" rouneded />
					</Col>
				</Row>
			</Container>
			<p>Hello World this is me!</p>
		</>
	);
};
