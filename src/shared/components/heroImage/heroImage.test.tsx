import React from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import HeroImage from "./HeroImage";
import { Image } from "./heroImage.styles";
import { HeroId, HeroName } from "../compareHeroes/compareHeroes.styles";
import Powerstats from "../heroDetails/powerstats/Powerstats";

describe("src/shared/components/HeroImage.tsx", () => {
  it("should render without errors", () => {
    const props = {
      hero: { id: "1", name: "hero1", image: { url: "" } },
      children: {},
    };
    const wrapper = shallow(<HeroImage {...props} />);
    expect(wrapper).exist;
  });

  it("should render image", () => {
    const children = (
      <>
        <HeroId>`id`</HeroId>
        <HeroName>`name`</HeroName>
        {/* <Powerstats powerstats={[]} /> */}
      </>
    );
    const props = {
      hero: {
        id: "1",
        name: "hero1",
        image: {
          url:
            "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg",
        },
      },
      children,
    };
    const wrapper = mount(<HeroImage {...props} />);
    expect(wrapper.find(Image)).to.have.length(1);
  });
});
