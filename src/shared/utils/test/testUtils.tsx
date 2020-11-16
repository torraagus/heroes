import React from "react";
import { mount, render as rtlRender } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../redux/rootReducer";
import heroesReducer from "../../redux/searchHeroes/searchHeroesReducer";

export function mountHook<T>(hook: () => T) {
  let data: Partial<T> = {};

  const Component = () => {
    Object.assign(data, hook());
    return null;
  };

  const wrapper = mount(<Component />);

  return {
    data,
    wrapper,
  };
}

function render(
  ui,
  {
    initialState = {},
    store = createStore(heroesReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// override render method
export { render };
