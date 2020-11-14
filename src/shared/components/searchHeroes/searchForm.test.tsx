import React, { ReactNode } from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import sinon from "sinon";
import SearchForm from "./SearchForm";
import { Form, Input, Submit } from "./searchForm.styles";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("src/shared/components/SearchForm.tsx", () => {
  it("should render without errors", () => {
    const props = {
      search: "",
      flexDir: "column",
      borderBottom: "1px solid #ccc",
      margin: "1rem",
      padding: "1rem",
      minWidth: "300px",
    };
    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper).exist;
  });

  it("should render with flexDir row", () => {
    const props = {
      search: "",
      flexDir: "row",
    };
    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper).exist;
  });

  it("should render a Form with an Input and a Submit", () => {
    // const historyObj = createMemoryHistory();
    // historyObj.location.pathname = "/";
    // const pushSpy = sinon.spy(historyObj, "push");
    const props = {
      search: "",
      flexDir: "column",
    };
    const wrapper = mount(
      <BrowserRouter>
        <SearchForm {...props} />
      </BrowserRouter>
    );
    expect(wrapper.find(Form)).to.have.length(1);
    expect(wrapper.find(Input)).to.have.length(1);
    expect(wrapper.find(Submit)).to.have.length(1);
    // sinon.assert.calledWith(pushSpy, "/heroes/1");
  });

  it("should search a hero", () => {
    const search = "superman";
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "search";
    historyObj.location.search = search;
    const pushSpy = sinon.spy(historyObj, "push");
    const props = {
      search,
      flexDir: "column",
    };
    const wrapper = mount(
      <Router history={historyObj}>
        <SearchForm {...props} />
      </Router>
    );
    wrapper.find(Submit).simulate("submit");
    sinon.assert.calledWith(pushSpy, { pathname: "search", search });
  });

  it("should change input text", () => {
    const search = "superman";
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "search";
    historyObj.location.search = search;
    const pushSpy = sinon.spy(historyObj, "push");
    const props = {
      search,
      flexDir: "column",
    };
    const wrapper = mount(
      <Router history={historyObj}>
        <SearchForm {...props} />
      </Router>
    );
    wrapper.find(Input).simulate("change", { target: { value: "batman" } });
    wrapper.find(Submit).simulate("submit");
    sinon.assert.calledWith(pushSpy, { pathname: "search", search: "batman" });
  });
});
