import fetch from "isomorphic-fetch";
import { Dispatch } from "redux";
import { fullLoadingBar, startLoadingBar } from "../loadingBar/loadingAction";

import {
  FETCH_HERO_DETAILS_FAILURE,
  FETCH_HERO_DETAILS_REQUEST,
  FETCH_HERO_DETAILS_SUCCESS,
} from "./heroeDetailsTypes";

const token = process.env.HEROES_TOKEN;

export const fetchHeroeDetailsRequest = () => {
  return {
    type: FETCH_HERO_DETAILS_REQUEST,
  };
};

export const fetchHeroeDetailsSuccess = (details: any) => {
  return {
    type: FETCH_HERO_DETAILS_SUCCESS,
    payload: details,
  };
};

export const fetchHeroeDetailsFailure = (error: any) => {
  return {
    type: FETCH_HERO_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchHeroeDetails = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchHeroeDetailsRequest());
    dispatch(startLoadingBar());

    fetch(`https://www.superheroapi.com/api.php/${token}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fullLoadingBar());
        if (data.response === "error") {
          dispatch(fetchHeroeDetailsFailure(data.error));
        } else {
          const { response, ...details } = data;
          dispatch(fetchHeroeDetailsSuccess({...details}));
        }
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fullLoadingBar());
        dispatch(fetchHeroeDetailsFailure(errMsg));
      });
  };
};

export const clearHeroeDetails = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "CLEAR_STATE",
    });
  };
};
