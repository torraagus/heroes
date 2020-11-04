import React from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties } from "./connections.properties";

const Connections = ({ connections }) => {
	return (
		<>
			<CategoryTitle>Connections</CategoryTitle>
			{properties.map((p) => (
				<Property key={p.name}>
					<PropertyName>{p.name}</PropertyName>
					<PropertyValue>{connections[p.prop]}</PropertyValue>
				</Property>
			))}
		</>
	);
};

export default Connections;
