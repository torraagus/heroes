import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import Work from "./Work";

describe("src/shared/components/heroDetails/Work.tsx", () => {
	it("should render without errors", () => {
		const props = {
			work: { occupation: "", base: "" },
		};
		const wrapper = shallow(<Work {...props} />);
		expect(wrapper).exist;
	});
});
