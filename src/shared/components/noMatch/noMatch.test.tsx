import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { BrowserRouter, Router } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { createMemoryHistory } from "history";
import sinon from "sinon";
import { BlackScreen, CloseIcon, Logo, SearchIcon } from "../navBar/navBar.styles";
import NoMatch from "./NoMatch";
import { Button } from "./noMatch.styles";

describe("src/shared/components/noMatch/NoMatch.tsx", () => {
	it("should render without errors", () => {
		const wrapper = mount(
			<BrowserRouter>
				<NoMatch />
			</BrowserRouter>
		);

		expect(wrapper).exist;
		wrapper.unmount();
	});

	it("should go to main page after clicking Button", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/wrongPage";
		const pushSpy = sinon.spy(historyObj, "push");

		const wrapper = mount(
			<Router history={historyObj}>
				<NoMatch />
			</Router>
		);

		wrapper.find(Button).simulate("click");
		sinon.assert.calledWith(pushSpy, "/");
		wrapper.unmount();
	});
});
