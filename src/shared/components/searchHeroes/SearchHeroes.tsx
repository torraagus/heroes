import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch, compose } from "redux";
import { clearState, searchHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import { isEmpty } from "../../utils";
import HeroList from "../heroList/HeroList";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import SearchFilters from "../searchFilters/SearchFilters";
import SearchForm from "./SearchForm";
import { Error, props } from "./searchHeroes.styles";

type Props = {
  heroesData: {
    totalPages: number;
    heroes: [{ id: string; name: string }];
    loading: boolean;
    error: string;
  };
  searchHeroes(
    query: string,
    page: number,
    filters: { by: string; value: string }[]
  ): (dispatch: Dispatch<AnyAction>) => void;
  clearState(): (dispatch: Dispatch<AnyAction>) => void;
};

type StateType = { page: number };

const HeroesContainer: FC<Props & RouteComponentProps<{}, {}, StateType>> = ({
  heroesData,
  searchHeroes,
  clearState,
  location,
}) => {
  const [filters, setFilters] = useState<{ by: string; value: string }[]>([]);
  const [page, setPage] = useState(1);
  const query = location.search.substr(1);

  useEffect(() => {
    setPage(1);
    searchHeroes(query, 1, filters);
    return () => {
      clearState();
    };
  }, [query]);
  
  useEffect(() => {
    searchHeroes(query, page, filters);
  }, [filters, page]);

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
            <Pagination
              page={page}
              onPageChange={(page) => setPage(page)}
              totalPages={heroesData.totalPages}
            />
            <HeroList heroes={heroesData.heroes} />
            <Pagination
              page={page}
              onPageChange={(page) => setPage(page)}
              totalPages={heroesData.totalPages}
            />
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
    searchHeroes: (
      query: string,
      page: number,
      filters: { by: string; value: string }[]
    ) => dispatch(searchHeroes(query, page, filters)),
    clearState: () => dispatch(clearState()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(HeroesContainer);
