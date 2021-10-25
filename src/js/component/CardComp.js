import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardComp = ({ title, company, img, link }) => {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={`${img}`} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{company}</Card.Text>
					<Button variant="primary" href={`${link}`}>
						Go and Check it out
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};
