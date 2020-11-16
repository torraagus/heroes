import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { BrowserRouter, Router } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { createMemoryHistory } from "history";
import sinon from "sinon";
import SearchBar from "./SearchBar";

describe("src/shared/components/searchBar.tsx", () => {
	it("should render without errors", () => {
		const props = { onClose: () => {}, width: 500 };
		const wrapper = mount(
			<BrowserRouter>
				<SearchBar {...props} />
			</BrowserRouter>
		);

		expect(wrapper).exist;
		console.log(wrapper.debug());
		wrapper.unmount();
	});
});
