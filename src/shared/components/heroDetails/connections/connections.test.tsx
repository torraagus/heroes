import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import Connections from "./Connections";

describe("src/shared/components/heroDetails/Connections.tsx", () => {
	it("should render without errors", () => {
		const props = {
			connections: { "group-affiliation": "", relatives: "" },
		};
		const wrapper = shallow(<Connections {...props} />);
		expect(wrapper).exist;
	});
});
