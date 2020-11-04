import React from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties } from "./work.properties";

const Work = ({ work }) => {
	return (
		<>
			<CategoryTitle>Work</CategoryTitle>
			{properties.map((p) => (
				<Property key={p.name}>
					<PropertyName>{p.name}</PropertyName>
					<PropertyValue>{work[p.prop]}</PropertyValue>
				</Property>
			))}
		</>
	);
};

export default Work;
