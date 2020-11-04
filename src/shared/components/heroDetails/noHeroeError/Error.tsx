import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../../styled/Container";
import { Button, Description, Title, props } from "./error.styles";

type Props = { error: string };

const Error: FC<Props & RouteComponentProps> = ({ error, history }) => {
  return (
    <Container {...props}>
      <Title>Error</Title>
      <Description>{error}</Description>
      <Button onClick={() => history.push("/")}>Go Home</Button>
    </Container>
  );
};

export default withRouter(Error);
