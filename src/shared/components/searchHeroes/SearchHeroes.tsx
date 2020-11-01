import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch, compose } from "redux";
import { clearState, searchHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import { isEmpty } from "../../utils";
import HeroList from "../heroList/HeroList";
import Loader from "../loader/Loader";
import SearchFilters from "../searchFilters/SearchFilters";
import SearchForm from "./SearchForm";
import { HomeBtn, Error, props } from "./searchHeroes.styles";

type Props = {
  heroesData: {
    heroes: [{ id: string; name: string }];
    loading: boolean;
    error: string;
  };
  searchHeroes(
    query: string,
    filters: { by: string; value: string }[]
  ): (dispatch: Dispatch<AnyAction>) => void;
  clearState(): (dispatch: Dispatch<AnyAction>) => void;
};

type StateType = {
  filters: { by: string; value: string }[];
};

const HeroesContainer: FC<Props & RouteComponentProps<{}, {}, StateType>> = ({
  heroesData,
  searchHeroes,
  clearState,
  location,
}) => {
  const [filters, setFilters] = useState<{ by: string; value: string }[]>([]);
  const query = location.search.substr(1);

  useEffect(() => {
    searchHeroes(query, filters);
    return () => {
      clearState();
    };
  }, [query, filters]);

  if (heroesData.loading) {
    return <Loader />;
  } else if (heroesData.heroes.length > 0 || heroesData.error != "") {
    return (
      <Container {...props}>
        <SearchForm search={query} flexDir="row" />

        {heroesData.heroes.length > 0 ? (
          <>
            <SearchFilters
              filters={filters}
              onFilterSelected={(f) => setFilters([...f])}
            />
            <HeroList heroes={heroesData.heroes} />
          </>
        ) : (
          <Error>{heroesData.error}</Error>
        )}
      </Container>
    );
  } else if (isEmpty(heroesData.heroes)) {
    return (
      <Container {...props}>
        <SearchForm search={query} flexDir="row" />
        <SearchFilters
          filters={filters}
          onFilterSelected={(f) => setFilters([...f])}
        />
        <HeroList heroes={[]} />
        <i>Try changing the filters or make another search</i>
      </Container>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    heroesData: state.heroes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchHeroes: (query: string, filters: { by: string; value: string }[]) =>
      dispatch(searchHeroes(query, filters)),
    clearState: () => dispatch(clearState()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(HeroesContainer);
