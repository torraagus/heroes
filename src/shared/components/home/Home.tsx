import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import { Container } from "../../styled/Container";
import CompareSection from "./CompareSection/CompareSection";
import SearchSection from "./searchSection/SearchSection";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <>
      <SearchSection />
      <CompareSection />
      <Container
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={colors.terciary}
      >
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor={"#000"}
          color="#fff"
        >
          Marvel Heroes
        </Container>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor={"#000"}
          color="#fff"
        >
          DC Heroes
        </Container>
      </Container>
      <Container
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={colors.primary}
        color="#fff"
      >
        Thanks to SuperHero API
      </Container>
      <Container
        height="10vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={"#444"}
        color={colors.terciary}
      >
        <small>Developed by Agustin Torra</small>
      </Container>
    </>
  );
};

export default Home;
