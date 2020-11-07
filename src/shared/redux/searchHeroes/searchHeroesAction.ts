import fetch from "isomorphic-fetch";
import { Action, AnyAction, Dispatch } from "redux";
import { fullLoadingBar, startLoadingBar } from "../loadingBar/loadingAction";
import { Filter } from "../../components/searchFilters/SearchFilters";

import {
	LOAD_MORE_HEROES_REQUEST,
	LOAD_MORE_HEROES_SUCCESS,
	SEARCH_HEROES_FAILURE,
	SEARCH_HEROES_REQUEST,
	SEARCH_HEROES_SUCCESS,
} from "./searchHeroesTypes";
import { HeroDetailsT } from "../heroeDetails/heroeDetailsReducer";
import { SearchHeroesState } from "./searchHeroesReducer";

const HEROES_PER_PAGE = 20;
const LOAD_MORE = 10;
const TOKEN = process.env.HEROES_TOKEN;

export const searchHeroesRequest = () => {
	return {
		type: SEARCH_HEROES_REQUEST,
		payload: { loading: { search: true, fetchMore: false } },
	};
};

export const searchHeroesSuccess = (heroes: HeroDetailsT[], pagesTotal: number) => {
	return {
		type: SEARCH_HEROES_SUCCESS,
		payload: { heroes, pagesTotal },
	};
};

export const searchHeroesFailure = (error: string) => {
	return {
		type: SEARCH_HEROES_FAILURE,
		payload: error,
	};
};

export const loadMoreHeroesRequest = () => {
	return {
		type: LOAD_MORE_HEROES_REQUEST,
		payload: { loading: { search: false, fetchMore: true } },
	};
};

export const loadMoreHeroesSuccess = (heroes: HeroDetailsT[], pagesTotal: number) => {
	return {
		type: LOAD_MORE_HEROES_SUCCESS,
		payload: { heroes, pagesTotal },
	};
};

export const searchHeroes = (query: string, page: number, filters?: Filter[]) => {
	return (dispatch: Dispatch) => {
		dispatch(searchHeroesRequest());
		dispatch(startLoadingBar());
		fetch(`https://www.superheroapi.com/api.php/${TOKEN}/search/${query}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(fullLoadingBar());
				if (data.response === "error") {
					return dispatch(searchHeroesFailure(data.error));
				} else {
					const idxPublisher = filters.findIndex((f) => f.by === "publisher");
					const idxGender = filters.findIndex((f) => f.by === "gender");
					const idxAlignment = filters.findIndex((f) => f.by === "alignment");
					const res: HeroDetailsT[] = data.results.filter((hero: HeroDetailsT) => {
						return (
							hero.biography[filters[idxPublisher]?.by] === filters[idxPublisher]?.value &&
							hero.appearance[filters[idxGender]?.by] === filters[idxGender]?.value &&
							hero.biography[filters[idxAlignment]?.by] === filters[idxAlignment]?.value
						);
					});
					return dispatch(
						searchHeroesSuccess(
							res.slice((page - 1) * HEROES_PER_PAGE, page * HEROES_PER_PAGE),
							Math.ceil(res.length / HEROES_PER_PAGE)
						)
					);
				}
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatch(fullLoadingBar());
				return dispatch(searchHeroesFailure(errMsg));
			});
	};
};

export const fetchMoreHeroes = (query: string, page: number, filters?: Filter[]) => {
	return (dispatch: Dispatch) => {
		dispatch(loadMoreHeroesRequest());

		fetch(`https://www.superheroapi.com/api.php/${TOKEN}/search/${query}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(fullLoadingBar());
				if (data.response === "error") {
					dispatch(searchHeroesFailure(data.error));
				} else {
					const idxPublisher = filters.findIndex((f) => f.by === "publisher");
					const idxGender = filters.findIndex((f) => f.by === "gender");
					const idxAlignment = filters.findIndex((f) => f.by === "alignment");
					const res: HeroDetailsT[] = data.results.filter((hero: HeroDetailsT) => {
						return (
							hero.biography[filters[idxPublisher]?.by] === filters[idxPublisher]?.value &&
							hero.appearance[filters[idxGender]?.by] === filters[idxGender]?.value &&
							hero.biography[filters[idxAlignment]?.by] === filters[idxAlignment]?.value
						);
					});
					dispatch(
						loadMoreHeroesSuccess(
							res.slice((page - 1) * HEROES_PER_PAGE, page * HEROES_PER_PAGE - LOAD_MORE),
							Math.ceil(res.length / HEROES_PER_PAGE)
						)
					);
				}
			})
			.catch((err) => {
				const errMsg = err.message;
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
