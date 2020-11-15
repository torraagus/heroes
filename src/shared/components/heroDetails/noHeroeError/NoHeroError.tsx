import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../../styled/Container";
import { Button, Description, Title } from "./noHeroError.styles";

type Props = { title: string; desc: string; showBtn?: boolean; mobile?: boolean };

const NoHeroError: FC<Props & RouteComponentProps> = ({ desc, title, showBtn, mobile, history }) => {
	return (
		<Container
			mobile={mobile}
			width={mobile ? "90vw" : "auto"}
			minHeight="auto"
			display="flex"
			flexDir="column"
			alignItems="center"
		>
			<Title>{title}</Title>
			<Description>{desc}</Description>
			{showBtn && <Button onClick={() => history.push("/")}>Go Home</Button>}
		</Container>
	);
};

export default withRouter(NoHeroError);
