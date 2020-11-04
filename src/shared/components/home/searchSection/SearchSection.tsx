import React, { FC } from "react";
import { Container } from "../../../styled/Container";
import SearchForm from "../../searchHeroes/SearchForm";
import { Title } from "../home.styles";
import { containerProps } from "./searchSection.styles";

const SearchSection: FC = () => {
	return (
		<Container {...containerProps}>
			<SearchForm search={""} flexDir="column" minWidth="300px" />
		</Container>
	);
};

export default SearchSection;
