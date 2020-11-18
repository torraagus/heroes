import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

describe("src/shared/App.tsx", () => {
	it("should render without errors", () => {
		const wrapper = shallow(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(wrapper).exist;
	});

	it("should render routes", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		);
		expect(wrapper.find(Switch).find(Route)).to.have.length(1);
	});
});
