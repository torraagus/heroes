import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import CompareHeroesForm from "./CompareHeroesForm";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Input, Submit } from "./compareHeroesForm.styles";
import sinon from "sinon";

describe("src/shared/components/CompareHeroesForm.tsx", () => {
	it("should render without errors", () => {
		const props = { compare: () => {} };
		const wrapper = shallow(
			<Provider store={store}>
				<CompareHeroesForm {...props} />
			</Provider>
		);
		expect(wrapper).exist;
	});

	it("should set the id of hero1 on change event", () => {
		const props = { compare: () => {} };
		const wrapper = mount(
			<Provider store={store}>
				<CompareHeroesForm {...props} />
			</Provider>
		);
		expect(wrapper.find(Input).at(0)).exist;
		wrapper
			.find(Input)
			.at(0)
			.simulate("change", {
				target: {
					value: "400",
				},
			});
		expect(wrapper.find(Input).at(0).prop("value")).to.equals("400");
		wrapper.unmount();
	});

	it("should set the id of hero2 on change event", () => {
		const props = { compare: () => {} };
		const wrapper = mount(
			<Provider store={store}>
				<CompareHeroesForm {...props} />
			</Provider>
		);
		expect(wrapper.find(Input).at(1)).exist;
		wrapper
			.find(Input)
			.at(1)
			.simulate("change", {
				target: {
					value: "150",
				},
			});
		expect(wrapper.find(Input).at(1).prop("value")).to.equals("150");
		wrapper.unmount();
	});

	it("should submit the form and call compare function", () => {
		const wrapper = mount(
			<Provider store={store}>
				<CompareHeroesForm />
			</Provider>
		);
		expect(wrapper.find(Submit)).exist;
		wrapper.find(Submit).simulate("submit");
		wrapper.unmount();
	});
});
