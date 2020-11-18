import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { Container } from "../../styled/Container";
import SearchHeroes from "./SearchHeroes";
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
import { LoaderIcon } from "../heroItem/heroItem.styles";
import Pagination from "../pagination/Pagination";
import { Button } from "../../styled/Button";
import Sinon from "sinon";
import heroesReducer from "../../redux/searchHeroes/searchHeroesReducer";

describe("src/shared/components/searchHeroes.tsx", () => {
	it("should render without errors", () => {
		const props = {};
		const wrapper = shallow(
			<Provider store={store}>
				<SearchHeroes {...props} />
			</Provider>
		);
		expect(wrapper).exist;
	});

	describe("src/shared/components/searchHeroes.tsx", () => {
		let initialState = {
			heroes: {
				loading: {
					search: true,
					fetchMore: false,
				},
				pagesTotal: 1,
				heroes: [],
				error: "",
			},
		};

		it("should render a Loader", () => {
			const historyObj = createMemoryHistory();
			historyObj.location = { pathname: "/search", search: "superman", state: {}, hash: "" };
			const wrapper = render(
				<Router history={historyObj}>
					<SearchHeroes />
				</Router>,
				{
					initialState,
					reducer: heroesReducer,
				}
			);
			expect(wrapper.find(Loader)).to.have.length(1);
			wrapper.unmount();
		});

		it("should render a list of heroes", () => {
			const historyObj = createMemoryHistory();
			historyObj.location = { pathname: "/search", search: "", state: {}, hash: "" };
			const wrapper = render(
				<Router history={historyObj}>
					<SearchHeroes />
				</Router>,
				{
					initialState: {
						heroes: {
							...initialState.heroes,
							loading: {
								search: false,
								fetchMore: false,
							},
							heroes: [
								{ id: "1", name: "Superman", image: { url: "" } },
								{ id: "2", name: "Ironman", image: { url: "" } },
							],
						},
					},
					reducer: heroesReducer,
				}
			);
			expect(wrapper.find(HeroList).prop("heroes").valueOf()).to.have.length(2);
			wrapper.unmount();
		});

		it("should go to next page", () => {
			const historyObj = createMemoryHistory();
			historyObj.location = { pathname: "/search", search: "", state: {}, hash: "" };
			const wrapper = render(
				<Router history={historyObj}>
					<SearchHeroes />
				</Router>,
				{
					initialState: {
						heroes: {
							...initialState.heroes,
							loading: {
								search: false,
								fetchMore: false,
							},
							pagesTotal: 3,
							heroes: [
								{ id: "1", name: "Superman", image: { url: "" } },
								{ id: "2", name: "Ironman", image: { url: "" } },
							],
						},
					},
					reducer: heroesReducer,
				}
			);
			expect(wrapper.find(Pagination).prop("page").valueOf()).to.equals(1);
			wrapper.find(Pagination).find(Button).simulate("click");
			expect(wrapper.find(Pagination).prop("page").valueOf()).to.equals(2);
			wrapper.unmount();
		});
	});
});
