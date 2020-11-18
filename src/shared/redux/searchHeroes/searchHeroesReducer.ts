import { HeroDetailsT } from "../heroeDetails/heroeDetailsReducer";
import {
	LOAD_MORE_HEROES_REQUEST,
	LOAD_MORE_HEROES_SUCCESS,
	SEARCH_HEROES_FAILURE,
	SEARCH_HEROES_REQUEST,
	SEARCH_HEROES_SUCCESS,
} from "./searchHeroesTypes";

type Action = {
	type: string;
	payload: { heroes: HeroDetailsT[]; pagesTotal: number } & string;
};

export type SearchHeroesState = {
	loading: { search: boolean; fetchMore: boolean };
	pagesTotal: number;
	heroes: HeroDetailsT[];
	error: string;
};

const initialState: SearchHeroesState = {
	loading: { search: true, fetchMore: false },
	pagesTotal: 0,
	heroes: [],
	error: "",
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SEARCH_HEROES_REQUEST:
			return {
				...state,
				loading: { search: true, fetchMore: false },
			};
		case SEARCH_HEROES_SUCCESS:
			return {
				loading: { search: false, fetchMore: false },
				heroes: action.payload.heroes,
				pagesTotal: action.payload.pagesTotal,
				error: "",
			};
		case SEARCH_HEROES_FAILURE:
			return {
				loading: { search: false, fetchMore: false },
				heroes: [],
				pagesTotal: 0,
				error: action.payload,
			};
		case LOAD_MORE_HEROES_REQUEST:
			return {
				...state,
				loading: { search: false, fetchMore: true },
			};
		case LOAD_MORE_HEROES_SUCCESS:
			return {
				loading: { search: false, fetchMore: false },
				heroes: [...state.heroes, ...action.payload.heroes],
				pagesTotal: action.payload.pagesTotal,
				error: "",
			};
		case "CLEAR_STATE":
			return initialState;

		default:
			return state;
	}
};

export default reducer;
