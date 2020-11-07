import React, { FC } from "react";
import { CategoryTitle } from "../heroDetails.styles";
import { AppearanceI, properties } from "./appareance.properties";
import { Name, Property, Value } from "./appearance.styles";

type Props = { appearance: AppearanceI };

const Appearance: FC<Props> = ({ appearance }) => {
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
						<Value>{appearance[p.prop] !== "null" ? appearance[p.prop] : "-"}</Value>
					)}
				</Property>
			))}
		</>
	);
};

export default Appearance;
