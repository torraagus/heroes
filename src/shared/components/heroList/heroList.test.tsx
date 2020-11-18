import React from "react";
import { assert, expect } from "chai";
import { shallow } from "enzyme";
import HeroList from "./HeroList";

describe("src/shared/components/heroList.tsx", () => {
	it("should render without errors", () => {
		const heroes = [{
			id: "1",
			name: "h1",
			image: {
			  url: "",
			},
		  }]
		const wrapper = shallow(<HeroList heroes={heroes} />);
		expect(wrapper).exist;
	});
});
