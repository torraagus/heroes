import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch, compose } from "redux";
import { clearState, searchHeroes } from "../../redux";
import { Container } from "../../styled/Container";
import HeroList from "../heroList/HeroList";
import Loader from "../loader/Loader";
import SearchForm from "./SearchForm";
import { HomeBtn, Error, props } from "./searchHeroes.styles";

type Props = {
  heroesData: {
    heroes: [{ id: string; name: string }];
    loading: boolean;
    error: string;
  };
  searchHeroes(query: string): (dispatch: Dispatch<AnyAction>) => void;
  clearState(): (dispatch: Dispatch<AnyAction>) => void;
};

const HeroesContainer: FC<Props & RouteComponentProps> = ({
  heroesData,
  searchHeroes,
  clearState,
  location,
  history,
}) => {
  const query = location.search.substr(1);

  useEffect(() => {
    searchHeroes(query);
    return () => {
      clearState();
    };
  }, [query]);

  if (heroesData.loading) {
    return <Loader />;
  } else if (heroesData.heroes.length >= 0 || heroesData.error != "") {
    return (
      <Container {...props}>
        <SearchForm search={query} flexDir="row" />
        {heroesData.heroes.length > 0 ? (
          <HeroList heroes={heroesData.heroes} />
        ) : (
          <Error>{heroesData.error}</Error>
        )}
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
    searchHeroes: (query: string) => dispatch(searchHeroes(query)),
    clearState: () => dispatch(clearState()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(HeroesContainer);
