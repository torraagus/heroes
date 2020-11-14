import React from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import NoHeroError from "./NoHeroError";
import { Button, Title } from "./noHeroError.styles";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import sinon from "sinon";
import { createMemoryHistory } from "history";

describe("src/shared/components/noHeroError.tsx", () => {
  it("should render without errors", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <NoHeroError title="Error" desc="Error description" />
      </BrowserRouter>
    );
    expect(wrapper).exist;
  });

  it("should render a Title", () => {
    const props = { title: "Error", desc: "Error description" };
    const wrapper = mount(
      <BrowserRouter>
          <NoHeroError {...props} />
          </BrowserRouter>
    );
    expect(wrapper.childAt(0).find(Title)).to.have.length(1);
  });

  it("should render a Button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <NoHeroError title="Error" desc="Error description" showBtn />
        </BrowserRouter>
    );
    expect(wrapper.childAt(0).find(Button)).to.have.length(1);
  });
  
  it("should go home when press the Button", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/heroes/888";
    const pushSpy = sinon.spy(historyObj, "push");
    const wrapper = mount(
      <Router history={historyObj}>
        <NoHeroError title="Error" desc="Error description" showBtn />
      </Router>
    );
	  wrapper.childAt(0).find(Button).simulate("click");
    sinon.assert.calledWith(pushSpy, "/");
  });
});
