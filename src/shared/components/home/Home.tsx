import React, { FC } from "react";
import { colors } from "../../../browser/styles/colors";
import { Container } from "../../styled/Container";
import SearchSection from "./searchSection/SearchSection";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <>
      <SearchSection />
      <Container display='flex' justifyContent='center' alignItems='center' bgColor={colors.secondary}>Heroes of both universes and more!</Container>
      <Container height='50vh' display='flex' justifyContent='center' alignItems='center' bgColor={colors.terciary}>Marvel heroes</Container>
      <Container height='50vh' display='flex' justifyContent='center' alignItems='center' bgColor={"#000"} color='#fff'>DC Heroes</Container>
      <Container height='25vh' display='flex' justifyContent='center' alignItems='center' bgColor={colors.primary} color='#fff'>Thanks to SuperHero API</Container>
      <Container height='10vh' display='flex' justifyContent='center' alignItems='center' bgColor={'#444'} color={colors.terciary}><small>Developed by Agustin Torra</small></Container>
    </>
  );
};

export default Home;
