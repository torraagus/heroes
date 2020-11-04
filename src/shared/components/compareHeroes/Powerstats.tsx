import React from "react";
import { stats } from "../heroDetails/powerstats/powerstats.properties";
import { Name, Powerstat, Value } from "./powerstats.styles";

const Powerstats = ({ hero }) => {
	return (
		<>
			{stats.map((p) => (
				<Powerstat key={p}>
					<Name>{p}: </Name> <Value>{hero[p] !== "null" ? hero[p] : "-"}</Value>
				</Powerstat>
			))}
		</>
	);
};

export default Powerstats;
