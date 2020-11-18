import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import BurguerMenu from "./BurguerMenu";

describe("src/shared/App.tsx", () => {
	it("should render without errors", () => {
		const props = { isOpen: false, toggleMenu: () => {} };
		const wrapper = shallow(<BurguerMenu {...props} />);
		expect(wrapper).exist;
	});

	it("should render when menu is open", () => {
		const props = { isOpen: true, toggleMenu: () => {} };
		const wrapper = shallow(<BurguerMenu {...props} />);
		expect(wrapper).exist;
	});
});
