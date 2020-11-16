import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { BrowserRouter, Router } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";
import SearchBar from "./SearchBar";
import { Form, SearchInput } from "./searchBar.styles";
import { createMemoryHistory } from "history";
import sinon from "sinon";
import { BlackScreen, CloseIcon, Logo, SearchIcon } from "../navBar/navBar.styles";

describe("src/shared/components/searchBar.tsx", () => {
  it("should render without errors", () => {
    const props = { onClose: () => {}, width: 500 };
    const wrapper = mount(
      <BrowserRouter>
        <SearchBar {...props} />
      </BrowserRouter>
    );

    expect(wrapper).exist;
    wrapper.unmount();
  });

  it("should make a search when form is submitted", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/";
    const pushSpy = sinon.spy(historyObj, "push");

    const props = { onClose: () => {}, width: 500 };
    const wrapper = mount(
      <Router history={historyObj}>
        <SearchBar {...props} />
      </Router>
    );

    wrapper
      .find(SearchInput)
      .simulate("change", { target: { value: "ironman" } });
    expect(wrapper.find(SearchInput).prop("value").valueOf()).to.equals(
      "ironman"
    );
    wrapper.find(Form).simulate("submit");
    sinon.assert.calledWith(pushSpy, {
      pathname: "/search",
      search: "ironman",
    });
    wrapper.unmount();
  });

  it("should close searchBar after clicking close button", () => {
    const spy = sinon.spy();

    const props = {
      onClose: spy,
      width: 500,
    };
    const wrapper = mount(
      <BrowserRouter>
        <SearchBar {...props} />
      </BrowserRouter>
    );

    wrapper.find(CloseIcon).simulate("click");
    sinon.assert.called(spy);
    wrapper.unmount();
  });

  it("should close searchBar after clicking black screen", () => {
    const spy = sinon.spy();

    const props = {
      onClose: spy,
      width: 500,
    };
    const wrapper = mount(
      <BrowserRouter>
        <SearchBar {...props} />
      </BrowserRouter>
    );

    wrapper.find(BlackScreen).simulate("click");
    sinon.assert.called(spy);
    wrapper.unmount();
  });

  it("should make a search when searchIcon is clicked", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/";
    const pushSpy = sinon.spy(historyObj, "push");

    const props = { onClose: () => {}, width: 500 };
    const wrapper = mount(
      <Router history={historyObj}>
        <SearchBar {...props} />
      </Router>
    );

    wrapper
      .find(SearchInput)
      .simulate("change", { target: { value: "wonderwoman" } });
    expect(wrapper.find(SearchInput).prop("value").valueOf()).to.equals(
      "wonderwoman"
    );
    wrapper.find(SearchIcon).simulate("click");
    sinon.assert.calledWith(pushSpy, {
      pathname: "/search",
      search: "wonderwoman",
    });
    wrapper.unmount();
  });

  it("should go to home after clicking the logo", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/heroes/55";
    const pushSpy = sinon.spy(historyObj, "push");
    const props = { onClose: () => {}, width: 1366 };
    const wrapper = mount(
      <Router history={historyObj}>
        <SearchBar {...props} />
      </Router>
    );

    wrapper.find(Logo).simulate("click");
    sinon.assert.calledWith(pushSpy, "/");
    wrapper.unmount();
  });
});
