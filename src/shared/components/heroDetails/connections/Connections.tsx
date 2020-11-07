import React, { FC } from "react";
import { CategoryTitle, Property, PropertyName, PropertyValue } from "../heroDetails.styles";
import { properties, ConnectionsT } from "./connections.properties";

type Props = { connections: ConnectionsT };

const Connections: FC<Props> = ({ connections }) => {
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
