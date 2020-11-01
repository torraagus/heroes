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
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor={colors.primary}
        color="#fff"
      >
        Heroes data thanks to SuperHero API
        <a style={{ color: colors.fourth }} href="https://superheroapi.com/">
          https://superheroapi.com/
        </a>
      </Container>
      <Container
        height="10vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={"#444"}
        color={"#bbb"}
      >
        <small>Developed by Agustin Torra</small>
      </Container>
    </>
  );
};

export default Home;
