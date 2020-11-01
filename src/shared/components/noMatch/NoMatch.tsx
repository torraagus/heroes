import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../styled/Container";
import { Code, Message, Button, props } from "./noMatch.styles";

const NoMatch: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  return (
    <Container {...props}>
      <Code>404</Code>
      <Message>Page not found</Message>
      <Button onClick={() => history.push("/")}>Go back</Button>
    </Container>
  );
};

export default withRouter(NoMatch);
