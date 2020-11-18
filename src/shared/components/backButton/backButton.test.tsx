import React from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import { Router } from "react-router-dom";
import sinon from "sinon";
import { createMemoryHistory } from "history";
import { Container } from "../../styled/Container";
import BackButton from "./BackButton";
import { Icon } from "./backButton.styles";

describe("src/shared/components/BackButton.tsx", () => {
	it("should render without errors", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/";
		const props = {
			path: "",
			back: false,
		};
		const wrapper = shallow(<BackButton {...props} />);
		expect(wrapper).exist;
	});

	it("should render an Icon", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/";
		const props = {
			path: "",
			back: false,
		};
		const wrapper = mount(
			<Router history={historyObj}>
				<BackButton {...props} />
			</Router>
		);
		expect(wrapper.find(Icon)).to.have.length(1);
	});

	it("should go back", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/";
		const goBackSpy = sinon.spy(historyObj, "goBack");
		const props = {
			path: "",
			back: true,
		};
		const wrapper = mount(
			<Router history={historyObj}>
				<BackButton {...props} />
			</Router>
		);
		wrapper.find(Icon).simulate("click");
		sinon.assert.calledOnce(goBackSpy);
	});

	it("should push to path", () => {
		const historyObj = createMemoryHistory();
		historyObj.location.pathname = "/search?superman";
		const pushSpy = sinon.spy(historyObj, "push");
		const props = {
			path: "/",
			back: false,
		};
		const wrapper = mount(
			<Router history={historyObj}>
				<BackButton {...props} />
			</Router>
		);
		wrapper.find(Icon).simulate("click");
		sinon.assert.calledOnce(pushSpy);
	});
});
