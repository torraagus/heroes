import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Wrapper, Code, Message, Button } from "./noMatch.styles";

const NoMatch: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
	return (
		<Wrapper>
			<Code>404</Code>
			<Message>Page not found</Message>
			<Button onClick={() => history.push("/")}>Go back</Button>
		</Wrapper>
	);
};

export default withRouter(NoMatch);
