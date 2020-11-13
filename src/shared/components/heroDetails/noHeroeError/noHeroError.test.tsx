import React from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import NoHeroError from "./NoHeroError";
import { Button, Title } from "./noHeroError.styles";
import { BrowserRouter as Router } from "react-router-dom";

describe("src/shared/components/noHeroError.tsx", () => {
  it("should render without errors", () => {
    const wrapper = shallow(
      <Router>
        <NoHeroError title="Error" desc="Error description" />
      </Router>
    );
    expect(wrapper).exist;
  });

  it("should render a Title", () => {
    const props = { title: "Error", desc: "Error description" };
    const wrapper = mount(
      <Router>
          <NoHeroError {...props} />
      </Router>
    );
    expect(wrapper.childAt(0).find(Title)).to.have.length(1);
  });

  it("should render a Button", () => {
    const wrapper = mount(
      <Router>
        <NoHeroError title="Error" desc="Error description" showBtn />
      </Router>
    );
	// wrapper.childAt(0).find(Button).simulate("click");
    expect(wrapper.childAt(0).find(Button)).to.have.length(1);
  });
});
