import React from "react";
import { Container } from "../../styled/Container";

const HeroItem = ({ hero }) => {
  console.log(hero);
  return (
    <Container
      height="auto"
      width="auto"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      padding=".25rem .25rem"
    >
      <img style={{ height: 128, borderRadius: 15 }} src={hero.image.url} />
      {/* <p>
        #{hero.id} - {hero.name}
      </p> */}
    </Container>
  );
};

export default HeroItem;
