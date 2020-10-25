import {
  FETCH_HERO_DETAILS_FAILURE,
  FETCH_HERO_DETAILS_REQUEST,
  FETCH_HERO_DETAILS_SUCCESS,
} from "./heroeDetailsTypes";

const initialState = {
  loading: false,
  details: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HERO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HERO_DETAILS_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: "",
      };
    case FETCH_HERO_DETAILS_FAILURE:
      return {
        loading: false,
        details: {},
        error: action.payload,
      };
    case "CLEAR_STATE":
      return { details: {}, error: "", loading: false };

    default:
      return state;
  }
};

export default reducer;
