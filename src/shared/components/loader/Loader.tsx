import React, { FC } from "react";
import { Container } from "../../styled/Container";
import { containerProps } from "./loader.styles";

const Loader: FC = () => {
	return (
		<Container {...containerProps}>
			<h2>Loading...</h2>
		</Container>
	);
};

export default Loader;
