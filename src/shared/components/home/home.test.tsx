import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { BrowserRouter, Router } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import { createMemoryHistory } from "history";
import sinon from "sinon";
import { BlackScreen, CloseIcon, Logo, SearchIcon } from "../navBar/navBar.styles";
import Home from "./Home";

describe("src/shared/components/home/Home.tsx", () => {
	it("should render without errors", () => {
		const wrapper = shallow(<Home />);

		expect(wrapper).exist;
	});
});
