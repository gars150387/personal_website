import React from "react";
import { CardComp } from "../component/CardComp";
import {DataCertifications} from "../component/DataCertfications";

export const Certifications = () => {
	return (
		<>
		{DataCertifications && DataCertifications.map(()=>{
			return (
				<CardComp key={DataCertifications.id} DataCertifications={DataCertifications}/>
			)
		})}
			
		</>
	);
};
