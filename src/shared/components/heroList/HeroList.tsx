import React from "react";
import { Container } from "../../styled/Container";
import { resultsProps } from "./heroList.styles";
import HeroItem from "../heroItem/HeroItem";

const HeroList = ({ heroes }) => {
	return (
		<>
			{/* <Container {...wrapperProps}> */}
			{heroes.length > 0 && (
				<Container {...resultsProps}>
					{heroes.map((hero) => (
						<HeroItem key={hero.id} hero={hero} />
					))}
				</Container>
			)}
			{/* </Container> */}
		</>
	);
};

export default HeroList;
