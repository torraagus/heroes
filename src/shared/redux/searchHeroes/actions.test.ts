import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./searchHeroesAction";
import * as types from "./searchHeroesTypes";
import fetchMock from "fetch-mock";
import { expect } from "chai";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
	afterEach(() => {
		fetchMock.restore();
	});

	// it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
	// 	fetchMock.getOnce("/searchHeroes", {
	// 		body: {
	// 			heroes: [
	// 				{ id: "1", name: "superman", image: { url: "" } },
	// 				{ id: "2", name: "ironman", image: { url: "" } },
	// 			],
	// 		},
	// 		headers: { "content-type": "application/json" },
	// 	});

	// 	const expectedActions = [
	// 		{ type: types.SEARCH_HEROES_REQUEST },
	// 		{
	// 			type: types.SEARCH_HEROES_SUCCESS,
	// 			payload: {
	// 				heroes: [
	// 					{ id: "1", name: "superman", image: { url: "" } },
	// 					{ id: "2", name: "ironman", image: { url: "" } },
	// 				],
	// 				pagesTotal: 1,
	// 			},
	// 		},
	// 	];
	// 	const store = mockStore({ heroes: [] });

	// 	return store.dispatch(actions.searchHeroes("superman", 1, [])).then(() => {
	// 		expect(store.getActions()).to.equals(expectedActions);
	// 	});
	// });
});
