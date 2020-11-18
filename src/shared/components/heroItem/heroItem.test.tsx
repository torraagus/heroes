import React from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import { Router } from "react-router-dom";
import sinon from "sinon";
import { createMemoryHistory } from "history";
import { HeroId, HeroName } from "../compareHeroes/compareHeroes.styles";
import Powerstats from "../heroDetails/powerstats/Powerstats";
import HeroItem from "./HeroItem";
import { Container } from "../../styled/Container";

describe("src/shared/components/HeroItem.tsx", () => {
  it("should render without errors", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/";
    const props = {
      hero: { id: "1", name: "hero1", image: { url: "" } },
    };
    const wrapper = mount(
      <Router history={historyObj}>
        <HeroItem {...props} />
      </Router>
    );
    expect(wrapper).exist;
  });

  it("should go to heroe details", () => {
    const historyObj = createMemoryHistory();
    historyObj.location.pathname = "/";
    const pushSpy = sinon.spy(historyObj, "push");
    const props = {
      hero: { id: "1", name: "hero1", image: { url: "" } },
    };
    const wrapper = mount(
      <Router history={historyObj}>
        <HeroItem {...props} />
      </Router>
    );
    wrapper.find(Container).simulate("click");
    sinon.assert.calledWith(pushSpy, "/heroes/1");
  });
});
