import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import Appearance from "./Appearance";

describe("src/shared/components/heroDetails/Appearance.tsx", () => {
	it("should render without errors", () => {
		const props = {
			appearance: {
				gender: "Male",
				race: "Human",
				height: ["175cm"],
				weight: ["80kg"],
				"eye-color": "blue",
				"hair-color": "green",
			},
		};
		const wrapper = shallow(<Appearance {...props} />);
		expect(wrapper).exist;
	});

	it("should render with null values", () => {
		const props = {
			appearance: {
				gender: "Male",
				race: "null",
				height: ["175cm"],
				weight: ["80kg"],
				"eye-color": "null",
				"hair-color": "null",
			},
		};
		const wrapper = shallow(<Appearance {...props} />);
		expect(wrapper).exist;
	});
});
