import React from "react";
import { CategoryTitle } from "../heroDetails.styles";
import { properties } from "./appareance.properties";
import { Name, Property, Value } from "./appareance.styles";

const Appareance = ({ appearance }) => {
	return (
		<>
			<CategoryTitle style={{ padding: "1rem 0 .5rem 0" }}>Appearance</CategoryTitle>
			{properties.map((p, i) => (
				<Property key={i}>
					<Name>{p.name}</Name>
					{i === 2 || i === 3 ? (
						<Value>
							{appearance[p.prop][0]} | {appearance[p.prop][1]}
						</Value>
					) : (
						<Value>{appearance[p.prop]}</Value>
					)}
				</Property>
			))}
		</>
	);
};

export default Appareance;
