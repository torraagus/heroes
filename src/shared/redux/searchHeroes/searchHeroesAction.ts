import fetch from "isomorphic-fetch";
import { Dispatch } from "redux";
import { fullLoadingBar, startLoadingBar } from "../loadingBar/loadingAction";

import {
  SEARCH_HEROES_FAILURE,
  SEARCH_HEROES_REQUEST,
  SEARCH_HEROES_SUCCESS,
} from "./searchHeroesTypes";

const token = process.env.HEROES_TOKEN;

export const searchHeroesRequest = () => {
  return {
    type: SEARCH_HEROES_REQUEST,
  };
};

export const searchHeroesSuccess = (heroes: any) => {
  return {
    type: SEARCH_HEROES_SUCCESS,
    payload: heroes,
  };
};

export const searchHeroesFailure = (error: any) => {
  return {
    type: SEARCH_HEROES_FAILURE,
    payload: error,
  };
};

export const searchHeroes = (
  query: string,
  filters?: { by: string; value: string }[]
) => {
  return (dispatch: Dispatch) => {
    dispatch(searchHeroesRequest());
    dispatch(startLoadingBar());

    fetch(`https://www.superheroapi.com/api.php/${token}/search/${query}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fullLoadingBar());
        if (data.response === "error") {
          dispatch(searchHeroesFailure(data.error));
        } else {
          if (filters) {
            const idxPublisher = filters.findIndex((f) => f.by === "publisher");
            const idxGender = filters.findIndex((f) => f.by === "gender");
            const idxAlignment = filters.findIndex((f) => f.by === "alignment");
            const res = data.results.filter((hero) => {
              return (
                hero.biography[filters[idxPublisher]?.by] ===
                  filters[idxPublisher]?.value &&
                hero.appearance[filters[idxGender]?.by] ===
                  filters[idxGender]?.value &&
                hero.biography[filters[idxAlignment]?.by] ===
                  filters[idxAlignment]?.value
              );
            });
            dispatch(searchHeroesSuccess(res));
          } else {
            dispatch(searchHeroesSuccess(data.results));
          }
        }
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fullLoadingBar());
        dispatch(searchHeroesFailure(errMsg));
      });
  };
};

export const clearState = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "CLEAR_STATE",
    });
  };
};
