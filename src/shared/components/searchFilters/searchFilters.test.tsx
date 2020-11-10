import React from "react";
import { assert, expect } from "chai";
import SearchFilters from "./SearchFilters";
import { shallow } from "enzyme";
import { FilterName, Form, Option, Options, Title } from "./searchFilters.styles";
import { Container } from "../../styled/Container";

describe("src/shared/components/searchFilters.tsx", () => {
	it("should render without errors", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper).exist;
	});

	it("should render a Title", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Title)).to.have.length(1);
		expect(wrapper.find(Title).text()).to.equals("Filters");
	});

	it("should render a Container", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Container)).to.have.length(1);
	});

	it("should render a Form", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Form)).to.have.length(1);
	});

	it("should render 3 filters", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Options)).to.have.length(3);
	});

	it("should render a publisher filter", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(FilterName).at(0).text()).to.equals("publisher:");
	});

	it("should render a gender filter", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(FilterName).at(1).text()).to.equals("gender:");
	});

	it("should render an alignment filter", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(FilterName).at(2).text()).to.equals("alignment:");
	});

	it("should render options of publisher select", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Options).at(0).find(Option).at(0).text()).to.equals("All");
		expect(wrapper.find(Options).at(0).find(Option).at(1).text()).to.equals("Marvel Comics");
		expect(wrapper.find(Options).at(0).find(Option).at(2).text()).to.equals("DC Comics");
		expect(wrapper.find(Options).at(0).find(Option).at(3).text()).to.equals("Shueisha");
	});

	it("should render options of gender select", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Options).at(1).find(Option).at(0).text()).to.equals("Both");
		expect(wrapper.find(Options).at(1).find(Option).at(1).text()).to.equals("Male");
		expect(wrapper.find(Options).at(1).find(Option).at(2).text()).to.equals("Female");
	});

	it("should render options of alingment select", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.find(Options).at(2).find(Option).at(0).text()).to.equals("Both");
		expect(wrapper.find(Options).at(2).find(Option).at(1).text()).to.equals("Good");
		expect(wrapper.find(Options).at(2).find(Option).at(2).text()).to.equals("Bad");
	});

	it("should select Marvel Comics as publisher", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);

		wrapper
			.find(Options)
			.at(0)
			.simulate("change", { target: { value: { by: "publisher", value: "Marvel Comics" } } });
	});

	it("should render when Both or All option publisher select", () => {
		const props = { filters: [], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);

		wrapper
			.find(Options)
			.at(2)
			.simulate("change", { target: { value: { by: "publisher", value: "All" } } });
	});

	it("should render when filters are populated", () => {
		const props = { filters: [{ by: "gender", value: "Male" }], onFilterSelected: ([]) => {} };
		const wrapper = shallow(<SearchFilters {...props} />);
		expect(wrapper.render().find(`select [selected]`).val()).to.equal("Male");
	});
});
