import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import { Container } from "../../styled/Container";
import CompareSection from "./CompareSection/CompareSection";
import SearchSection from "./searchSection/SearchSection";
import { apiContainer, footerContainer } from "./home.styles";

const Home: FC = () => {
	return (
		<>
			<SearchSection />
			<CompareSection />
			<Container {...apiContainer}>
				Heroes data thanks to SuperHero API
				<a style={{ color: colors.terciary }} href="https://superheroapi.com/">
					https://superheroapi.com/
				</a>
			</Container>
			<Container {...footerContainer}>
				<small>Developed by Agustin Torra</small>
			</Container>
		</>
	);
};

export default Home;
