import React from "react";
import { CategoryTitle } from "../heroDetails.styles";
import { stats } from "./powerstats.properties";
import { Name, Powerstat, Value } from "./powerstats.styles";

const Powerstats = ({ powerstats }) => {
	return (
		<>
			<CategoryTitle>Powerstats</CategoryTitle>
			{stats.map((stat) => (
				<Powerstat key={stat}>
					<Name>{stat}</Name>
					<Value>{powerstats[stat]}</Value>
				</Powerstat>
			))}
		</>
	);
};

export default Powerstats;
