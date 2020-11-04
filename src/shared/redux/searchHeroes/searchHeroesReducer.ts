import {
	LOAD_MORE_HEROES_REQUEST,
	LOAD_MORE_HEROES_SUCCESS,
	SEARCH_HEROES_FAILURE,
	SEARCH_HEROES_REQUEST,
	SEARCH_HEROES_SUCCESS,
} from "./searchHeroesTypes";

const initialState = {
	loading: { search: true, more: false },
	pagesTotal: 0,
	heroes: [],
	error: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_HEROES_REQUEST:
			return {
				...state,
				loading: { search: true, more: false },
			};
		case SEARCH_HEROES_SUCCESS:
			return {
				loading: { search: false, more: false },
				heroes: action.payload.heroes,
				pagesTotal: action.payload.pagesTotal,
				error: "",
			};
		case SEARCH_HEROES_FAILURE:
			return {
				loading: { search: false, more: false },
				heroes: [],
				pagesTotal: 0,
				error: action.payload,
			};
		case LOAD_MORE_HEROES_REQUEST:
			return {
				...state,
				loading: { search: false, more: true },
			};
		case LOAD_MORE_HEROES_SUCCESS:
			return {
				loading: { search: false, more: false },
				heroes: [...state.heroes, ...action.payload.heroes],
				pagesTotal: action.payload.pagesTotal,
				error: "",
			};
		case "CLEAR_STATE":
			return { pagesTotal: 0, heroes: [], error: "", loading: true };

		default:
			return state;
	}
};

export default reducer;
