import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import CompareHeroes from "./CompareHeroes";
import Powerstats from "./Powerstats";

describe("src/shared/components/compareHeroes/Powerstats.tsx", () => {
	it("should render without errors", () => {
		const props = {
			powerstats: { combat: "68", intelligence: "45", strength: "26", durability: "88", power: "61", speed: "47" },
		};
		const wrapper = shallow(<Powerstats {...props} />);
		expect(wrapper).exist;
	});

	it("should render powerstats with null values", () => {
		const props = {
			powerstats: {
				combat: "null",
				intelligence: "45",
				strength: "null",
				durability: "88",
				power: "61",
				speed: "47",
			},
		};
		const wrapper = shallow(<Powerstats {...props} />);
		expect(wrapper).exist;
	});
});
