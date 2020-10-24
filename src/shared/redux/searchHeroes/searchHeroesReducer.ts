import {
  SEARCH_HEROES_FAILURE,
  SEARCH_HEROES_REQUEST,
  SEARCH_HEROES_SUCCESS,
} from "./searchHeroesTypes";

const initialState = {
  loading: false,
  heroes: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HEROES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_HEROES_SUCCESS:
      return {
        loading: false,
        heroes: action.payload,
        error: "",
      };
    case SEARCH_HEROES_FAILURE:
      return {
        loading: false,
        heroes: [],
        error: action.payload,
      };
    case "CLEAR_STATE":
      return { heroes: [], error: "", loading: false };

    default:
      return state;
  }
};

export default reducer;
