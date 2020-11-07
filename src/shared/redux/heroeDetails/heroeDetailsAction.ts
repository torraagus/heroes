import fetch from "isomorphic-fetch";
import { Dispatch } from "redux";
import { fullLoadingBar, startLoadingBar } from "../loadingBar/loadingAction";
import { HeroDetailsT } from "./heroeDetailsReducer";

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

export const fetchHeroeDetailsSuccess = (details: HeroDetailsT | [HeroDetailsT, HeroDetailsT]) => {
	return {
		type: FETCH_HERO_DETAILS_SUCCESS,
		payload: details,
	};
};

export const fetchHeroeDetailsFailure = (error: string) => {
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
					dispatch(fetchHeroeDetailsSuccess({ ...details }));
				}
			})
			.catch((err) => {
				const errMsg = err.message;
				dispatch(fullLoadingBar());
				dispatch(fetchHeroeDetailsFailure(errMsg));
			});
	};
};

export const compareHeroes = (one: string, two: string) => {
	return (dispatch: Dispatch) => {
		dispatch(fetchHeroeDetailsRequest());
		dispatch(startLoadingBar());

		const urls = [
			`https://www.superheroapi.com/api.php/${token}/${one}`,
			`https://www.superheroapi.com/api.php/${token}/${two}`,
		];

		const promises = urls.map((url) => fetch(url));

		Promise.all(promises)
			.then((res) => res.map((p) => p.json()))
			.then(async ([d1, d2]) => {
				const { response: res1, name: name1, id: id1, powerstats: ps1, image: img1 } = await d1;
				const { response: res2, name: name2, id: id2, powerstats: ps2, image: img2 } = await d2;
				if (res1 === "error" || res2 === "error") {
					dispatch(fetchHeroeDetailsFailure("Error fetching heroes data. Please check that both ids are right."));
				} else {
					dispatch(
						fetchHeroeDetailsSuccess([
							{ id: id1, name: name1, powerstats: { ...ps1 }, image: { ...img1 } },
							{ id: id2, name: name2, powerstats: { ...ps2 }, image: { ...img2 } },
						])
					);
				}
				dispatch(fullLoadingBar());
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
