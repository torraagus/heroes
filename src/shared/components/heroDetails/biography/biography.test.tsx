import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import Biography from "./Biography";

describe("src/shared/components/heroDetails/Biography.tsx", () => {
	it("should render without errors", () => {
		const props = {
			heroName: "hero",
			biography: {
				"full-name": "",
				"alter-egos": "",
				aliases: ["a", "b"],
				"place-of-birth": "",
				"first-appareance": "",
				publisher: "",
				alignment: "",
			},
		};
		const wrapper = shallow(<Biography {...props} />);
		expect(wrapper).exist;
	});
});
