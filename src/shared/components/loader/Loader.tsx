import React from "react";
import { Container } from "../../styled/Container";

const Loader = () => {
	return (
		<Container
			minHeight="100vh"
			display="flex"
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			bgColor={"#fff"}
		>
			<h2>Loading...</h2>
		</Container>
	);
};

export default Loader;
