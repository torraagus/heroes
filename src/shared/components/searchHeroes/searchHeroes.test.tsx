import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import { Container } from "../../styled/Container";
import SearchHeroes from "./SearchHeroes";
import { Provider } from "react-redux";
import store from "../../redux/store";
import BackButton from "../backButton/BackButton";
import { BrowserRouter as Router } from "react-router-dom";
import SearchFilters from "../searchFilters/SearchFilters";

describe("src/shared/components/searchHeroes.tsx", () => {
  it("should render without errors", () => {
    const props = {};
    const wrapper = shallow(
      <Provider store={store}>
        <SearchHeroes {...props} />
      </Provider>
    );
    expect(wrapper).exist;
  });

  it("should render when there is no heroes nor error", () => {
    const props = {
      loading: {
        search: true,
        fetchMore: false,
      },
      pagesTotal: 1,
      heroes: [],
      error: "",
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SearchHeroes {...props} />
        </Router>
      </Provider>
    );
  });

  it("should unmount", () => {
    const props = {
      loading: {
        search: false,
        fetchMore: false,
      },
      pagesTotal: 1,
      heroes: [
        {
          id: "1",
          name: "h1",
          image: {
            url: "",
          },
        },
      ],
      error: "",
	};
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SearchHeroes {...props} />
        </Router>
      </Provider>
	);
	wrapper.unmount()
  });
});
