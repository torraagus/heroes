import { colors } from "../../../browser/styles/colors";
import { getRandomInt } from "../../utils";
import { START_LOADING_BAR, FULL_LOADING_BAR } from "./loadingTypes";

const initialState = {
  progress: 0,
  color: colors.primary,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_BAR:
        return { ...state, progress: getRandomInt(1, 60) };
    case FULL_LOADING_BAR:
        return { ...state, progress: 100 };
    default:
      return state;
  }
};

export default reducer;
