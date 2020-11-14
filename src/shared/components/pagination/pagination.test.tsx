import React, { ReactNode } from "react";
import { assert, expect } from "chai";
import { mount, render, shallow } from "enzyme";
import Pagination from "./Pagination";
import { Button as LoadMoreBtn } from "../../styled/Button";
import sinon from "sinon";

describe("src/shared/components/Pagination.tsx", () => {
  it("should render without errors", () => {
    const props = {
      page: 1,
      pagesTotal: 10,
      onPageChange: (page: number) => {},
    };
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper).exist;
  });

  it("should call onPageChange", () => {
    const opcSpy = sinon.spy();
    const props = {
      page: 1,
      pagesTotal: 10,
      onPageChange: opcSpy,
    };
    const wrapper = mount(<Pagination {...props} />);
    wrapper.find(LoadMoreBtn).simulate("click");
    sinon.assert.calledOnce(opcSpy);
  });
});
