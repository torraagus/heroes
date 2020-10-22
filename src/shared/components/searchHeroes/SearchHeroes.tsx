import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { searchHeroes } from "../../redux";

type Props = {
  heroesData: {
    heroes: [{ id: string; name: string }];
    loading: boolean;
    error: string;
  };
  searchHeroes(query: string): (dispatch: Dispatch<AnyAction>) => void;
};

const HeroesContainer: FC<Props> = ({ heroesData, searchHeroes }) => {
  const [query, setQuery] = useState("");

  return heroesData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h4>Search a hero</h4>
      <form onSubmit={() => searchHeroes(query)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {heroesData?.heroes?.length > 0 ? (
        <>
          <h1>Heroes ({heroesData?.heroes?.length})</h1>
          {heroesData?.heroes?.map((h) => (
            <p key={h.id}>
              ({h.id}) {h.name}
            </p>
          ))}
        </>
      ) : (
        <p>{heroesData.error}</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heroesData: state.heroes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchHeroes: (query: string) => dispatch(searchHeroes(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesContainer);
