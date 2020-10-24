import React from "react";
import { Container } from "../../styled/Container";
import HeroItem from "../heroItem/HeroItem";

const HeroList = ({ heroes }) => {
  return (
    <Container
      width="90vw"
      height="auto"
      display="flex"
      flexDir="column"
      alignItems="center"
      padding="1rem 0"
    >
      <h2>Results ({heroes.length})</h2>
      <Container
        width="90vw"
        height="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        padding="1rem 0"
      >
        {heroes.map((hero) => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </Container>
    </Container>
  );
};

export default HeroList;
