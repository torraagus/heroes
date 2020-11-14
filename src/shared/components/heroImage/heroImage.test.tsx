import React, { ReactNode } from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import HeroImage from "./HeroImage";
import { Image } from "./heroImage.styles";
import { Id, LoaderIcon, Name } from "../heroItem/heroItem.styles";

describe("src/shared/components/HeroImage.tsx", () => {
  it("should render without errors", () => {
    const props = {
      hero: { id: "1", name: "hero1", image: { url: "" } },
      children: {},
    };
    const wrapper = shallow(<HeroImage {...props} />);
    expect(wrapper).exist;
  });

  it("should render Image component", () => {
    const props = {
      hero: {
        id: "1",
        name: "hero1",
        image: {
          url: "",
        },
      },
      children: {},
    };
    const wrapper = mount(<HeroImage {...props} />);
    expect(wrapper.find(Image)).to.have.length(1);
    expect(wrapper.find(LoaderIcon)).to.have.length(1);
  });

  it("should show hero info after onLoad event", () => {
    const props = {
      hero: {
        id: "1",
        name: "hero1",
        image: {
          url:
            "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg",
        },
      },
      children: (
        <>
          <Id>#1</Id>
          <Name>hero1</Name>
        </>
      ),
    };
    const wrapper = mount(<HeroImage {...props} />);
    wrapper.find(Image).simulate("load");
    expect(wrapper.find(LoaderIcon)).to.have.length(0);
    expect(wrapper.find(Id)).to.have.length(1);
    expect(wrapper.find(Name)).to.have.length(1);
  });

  it("should show hero info after onError event", () => {
    const props = {
      hero: {
        id: "1",
        name: "hero1",
        image: {
          url:
            "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg",
        },
      },
      children: (
        <>
          <Id>#1</Id>
          <Name>hero1</Name>
        </>
      ),
    };
    const wrapper = mount(<HeroImage {...props} />);
    wrapper.find(Image).simulate("error");
    expect(wrapper.find(LoaderIcon)).to.have.length(0);
    expect(wrapper.find(Id)).to.have.length(1);
    expect(wrapper.find(Name)).to.have.length(1);
  });
});
