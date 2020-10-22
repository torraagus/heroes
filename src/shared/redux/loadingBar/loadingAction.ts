import { START_LOADING_BAR, FULL_LOADING_BAR } from "./loadingTypes";

export const startLoadingBar = () => {
  return {
    type: START_LOADING_BAR
  };
};

export const fullLoadingBar = () => {
  return {
    type: FULL_LOADING_BAR
  };
};