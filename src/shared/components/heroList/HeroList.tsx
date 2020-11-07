import React, { FC } from "react";
import { Container } from "../../styled/Container";
import { resultsProps } from "./heroList.styles";
import HeroItem from "../heroItem/HeroItem";
import { HeroDetailsT } from "../../redux/heroeDetails/heroeDetailsReducer";

type Props = { heroes: HeroDetailsT[] };

const HeroList: FC<Props> = ({ heroes }) => {
	return (
		heroes.length > 0 && (
			<Container {...resultsProps}>
				{heroes.map((hero) => (
					<HeroItem key={hero.id} hero={hero} />
				))}
			</Container>
		)
	);
};

export default HeroList;
