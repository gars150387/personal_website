import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CarouselComp } from "../component/CarouselComp";

export const Home = () => (
	<div className="text-center mt-5">
		{/* <h1>Hello I'm Gustavo!</h1> */}
		<CarouselComp />
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
