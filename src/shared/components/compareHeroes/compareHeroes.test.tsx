import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";
import CompareHeroes from "./CompareHeroes";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("src/shared/components/CompareHeroes.tsx", () => {
	it("should render without errors", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/";
		const props = {
			hero: {
				loading: false,
				details: [],
				error: "",
			},
		};
		const wrapper = mount(
			<Provider store={store}>
				<Router history={historyObj}>
					<CompareHeroes {...props} />
				</Router>
			</Provider>
		);
		expect(wrapper).exist;
		wrapper.unmount();
	});

	it("should render two heroes", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/";
		const props = {
			hero: {
				loading: false,
				details: [
					{
						id: "1",
						name: "h1",
						image: { url: "url" },
						powerstats: { combat: 50, intelligence: 75, strength: 26, durability: 100, power: 66, speed: 88 },
					},
					{
						id: "2",
						name: "h2",
						image: { url: "url" },
						powerstats: { combat: 68, intelligence: 45, strength: 26, durability: 88, power: 61, speed: 47 },
					},
				],
				error: "",
			},
		};

		const wrapper = shallow(
			<Provider store={store}>
				<Router history={historyObj}>
					<CompareHeroes {...props} />
				</Router>
			</Provider>
		)
			.dive()
			.dive();
		wrapper.unmount();
	});
});
