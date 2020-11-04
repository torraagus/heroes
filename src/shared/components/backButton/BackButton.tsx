import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../styled/Container";
import { Icon, props } from "./backButton.styles";

type Props = { path?: string; back?: boolean };

const BackButton: FC<Props & RouteComponentProps> = ({ path, back, history }) => {
	return (
		<Container {...props}>
			<Icon onClick={() => (back ? history.goBack() : history.push(path))}>Back</Icon>
		</Container>
	);
};

export default withRouter(BackButton);
