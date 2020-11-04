import React from "react";
import { Container } from "../../../styled/Container";
import CompareHeroes from "../../compareHeroes/CompareHeroes";
import { Title } from "../home.styles";
import { containerProps, Subtitle } from "./compareSection.styles";

const CompareSection = () => {
	return (
		<Container id="compare" {...containerProps}>
			<Title>Compare heroes</Title>
			<Subtitle>From #1 to #732</Subtitle>
			<CompareHeroes />
		</Container>
	);
};

export default CompareSection;
