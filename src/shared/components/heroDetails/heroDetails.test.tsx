import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { Container } from "../../styled/Container";
import { Provider } from "react-redux";
import store from "../../redux/store";
import BackButton from "../backButton/BackButton";
import { BrowserRouter, Router } from "react-router-dom";
import SearchFilters from "../searchFilters/SearchFilters";
import HeroList from "../heroList/HeroList";
import HeroItem from "../heroItem/HeroItem";
import NoHeroError from "../heroDetails/noHeroeError/NoHeroError";
import { render } from "../../utils/test/testUtils";
import { createMemoryHistory } from "history";
import Loader from "../loader/Loader";
import HeroeDetails from "../heroDetails/HeroeDetails";
import heroeDetailsReducer from "../../redux/heroeDetails/heroeDetailsReducer";

describe("src/shared/components/heroDetails.tsx", () => {
	it("should render without errors", () => {
		const historyObj = createMemoryHistory();
		historyObj.location = { pathname: "", search: "", state: {}, hash: "" };
		const wrapper = mount(
			<Provider store={store}>
				<Router history={historyObj}>
					<HeroeDetails />
				</Router>
			</Provider>
		);
		expect(wrapper).exist;
	});

	it("should render a Loader", () => {
		let initialState = {
			heroeDetails: {
				loading: {
					search: true,
					fetchMore: false,
				},
				pagesTotal: 1,
				heroes: [],
				error: "",
			},
		};
		const historyObj = createMemoryHistory();
		historyObj.location = { pathname: "/search", search: "superman", state: {}, hash: "" };
		const wrapper = render(
			<Router history={historyObj}>
				<HeroeDetails />
			</Router>,
			{
				initialState,
				reducer: heroeDetailsReducer,
			}
		);
		expect(wrapper.find(Loader)).to.have.length(1);
		wrapper.unmount();
	});
});
