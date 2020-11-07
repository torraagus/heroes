import React, { FC } from "react";
import { CategoryTitle } from "../heroDetails.styles";
import { PowerstatsT, stats } from "./powerstats.properties";
import { Name, Powerstat, Value } from "./powerstats.styles";

type Props = { powerstats: PowerstatsT };

const Powerstats: FC<Props> = ({ powerstats }) => {
	return (
		<>
			<CategoryTitle>Powerstats</CategoryTitle>
			{stats.map((p) => (
				<Powerstat key={p}>
					<Name>{p}</Name>
					<Value>{powerstats[p] !== "null" ? powerstats[p] : "-"}</Value>
				</Powerstat>
			))}
		</>
	);
};

export default Powerstats;
