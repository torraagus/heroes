import React, { FC, useState } from "react";
import { colors } from "../../../../browser/styles/colors";
import { Container } from "../../../styled/Container";
import SearchFilters from "../../searchFilters/SearchFilters";
import SearchForm from "../../searchHeroes/SearchForm";

const SearchSection: FC = () => {

  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bgColor={colors.primary}
      color="#fff"
    >
      <SearchForm search={""} flexDir="column"/>
    </Container>
  );
};

export default SearchSection;
