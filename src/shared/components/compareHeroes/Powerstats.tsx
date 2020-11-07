import React, { FC } from "react";
import { PowerstatsT, stats } from "../heroDetails/powerstats/powerstats.properties";
import { Name, Powerstat, Value } from "./powerstats.styles";

type Props = { powerstats: PowerstatsT };

const Powerstats: FC<Props> = ({ powerstats }) => {
	return (
		<>
			{stats.map((p) => (
				<Powerstat key={p}>
					<Name>{p}: </Name> <Value>{powerstats[p] !== "null" ? powerstats[p] : "-"}</Value>
				</Powerstat>
			))}
		</>
	);
};

export default Powerstats;
