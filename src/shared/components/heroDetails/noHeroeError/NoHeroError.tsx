import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Description, Title } from "./noHeroError.styles";

type Props = { title: string; desc: string; showBtn?: boolean };

const NoHeroError: FC<Props & RouteComponentProps> = ({ desc, title, showBtn, history }) => {
	return (
		<>
			<Title>{title}</Title>
			<Description>{desc}</Description>
			{showBtn && <Button onClick={() => history.push("/")}>Go Home</Button>}
		</>
	);
};

export default withRouter(NoHeroError);
