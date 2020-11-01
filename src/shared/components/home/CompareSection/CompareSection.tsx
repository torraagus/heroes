import React from "react";
import { colors } from "../../../../browser/styles/colors";
import { Container } from "../../../styled/Container";
import CompareHeroes from "../../compareHeroes/CompareHeroes";

const CompareSection = () => {
  return (
    <Container
      id="compare"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bgColor={colors.secondary}
      color="white"
    >
      <h1>Compare heroes</h1>
      <p>From #1 to #732</p>
      <CompareHeroes />
    </Container>
  );
};

export default CompareSection;
