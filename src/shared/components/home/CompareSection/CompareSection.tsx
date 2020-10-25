import React from "react";
import { colors } from "../../../../browser/styles/colors";
import { Container } from "../../../styled/Container";
import CompareHeroes from "../../compareHeroes/CompareHeroes";

const CompareSection = () => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bgColor={colors.secondary}
      color="white"
    >
      <h1>Compare heroes</h1>
      <CompareHeroes />
    </Container>
  );
};

export default CompareSection;
