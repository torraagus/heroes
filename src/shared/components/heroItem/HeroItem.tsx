import React, { FC, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../styled/Container";
import HeroImage from "../heroImage/HeroImage";
import { ContainerProps as props } from "./heroItem.styles";

type Props = { hero: { name: string; id: string; image: { url: string } } };

const HeroItem: FC<Props & RouteComponentProps> = ({ hero, history }) => {
  return (
    <Container {...props} onClick={() => history.push(`/heroes/${hero.id}`)}>
      <HeroImage hero={hero}>
        <>
          <h2>#{hero.id}</h2>
          <small style={{ textAlign: "center" }}>{hero.name}</small>
        </>
      </HeroImage>
    </Container>
  );
};

export default withRouter(HeroItem);
