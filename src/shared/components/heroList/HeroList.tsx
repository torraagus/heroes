import React from "react";
import { Container } from "../../styled/Container";
import { wrapperProps, resultsProps } from "./heroList.styles";
import HeroItem from "../heroItem/HeroItem";

const HeroList = ({ heroes }) => {
  return (
    <Container {...wrapperProps}>
      <h2>Results ({heroes.length})</h2>
      {heroes.length > 0 && (
        <Container {...resultsProps}>
          {heroes.map((hero) => (
            <HeroItem key={hero.id} hero={hero} />
          ))}
        </Container>
      )}
    </Container>
  );
};

export default HeroList;
