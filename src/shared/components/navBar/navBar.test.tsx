import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import NavBar from "./NavBar";
import { BrowserRouter, Router } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { BlackScreen, Logo, SearchIcon } from "./navBar.styles";
import { createMemoryHistory } from "history";
import sinon from "sinon";

describe("src/shared/components/navBar.tsx", () => {
	it("should render without errors", () => {
		const wrapper = mount(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		expect(wrapper).exist;
		wrapper.unmount();
	});

	it("should open menu", () => {
		const wrapper = mount(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		wrapper.find(BurguerMenu).simulate("click");
		expect(wrapper.find(BurguerMenu).prop("isOpen").valueOf()).to.equals(true);
		wrapper.unmount();
	});

	it("should close menu by clicking the black screen", () => {
		const wrapper = mount(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		expect(wrapper.find(BlackScreen).prop("show").valueOf()).to.equals(false);
		wrapper.find(BurguerMenu).simulate("click");
		expect(wrapper.find(BlackScreen).prop("show").valueOf()).to.equals(true);
		wrapper.find(BlackScreen).simulate("click");
		expect(wrapper.find(BlackScreen).prop("show").valueOf()).to.equals(false);
		wrapper.unmount();
	});

	it("should go to home after clicking the logo", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/heroes/55";
		const pushSpy = sinon.spy(historyObj, "push");
		const wrapper = mount(
			<Router history={historyObj}>
				<NavBar />
			</Router>
		);

		wrapper.find(Logo).simulate("click");
		sinon.assert.calledWith(pushSpy, "/");
		wrapper.unmount();
	});

	it("should open searchBar after clicking the search icon", () => {
		const searchSpy = sinon.spy();
		const wrapper = mount(
			<BrowserRouter>
				<NavBar onSearch={searchSpy} />
			</BrowserRouter>
		);

		wrapper.find(SearchIcon).simulate("click");
		sinon.assert.calledOnce(searchSpy);
		wrapper.unmount();
	});
});
