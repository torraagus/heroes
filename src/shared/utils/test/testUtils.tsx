import React from "react";
import { mount, render as rtlRender, shallow } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

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
	{ initialState, reducer, store = createStore(reducer, initialState, applyMiddleware(thunk)), ...renderOptions }
) {
	function Wrapper({ children }) {
		// console.log(initialState);
		// console.log(store.getState());
		return <Provider store={store}>{children}</Provider>;
	}
	// return rtlRender(ui, { wrapper: Wrapper({ children: ui }), ...renderOptions });
	return mount(Wrapper({ children: ui }));
}

// override render method
export { render };

export function shallowUntilTarget(
	componentInstance,
	TargetComponent,
	{ maxTries = 10, shallowOptions = {}, _shallow = shallow } = {}
) {
	if (!componentInstance) {
		throw new Error("componentInstance parameter is required");
	}
	if (!TargetComponent) {
		throw new Error("TargetComponent parameter is required");
	}

	let root = _shallow(componentInstance, shallowOptions);

	if (typeof root.type() === "string") {
		// If type() is a string then it's a DOM Node.
		// If it were wrapped, it would be a React component.
		throw new Error("Cannot unwrap this component because it is not wrapped");
	}

	for (let tries = 1; tries <= maxTries; tries++) {
		if (root.is(TargetComponent)) {
			// Now that we found the target component, render it.
			return root.shallow(shallowOptions);
		}
		// Unwrap the next component in the hierarchy.
		root = root.dive();
	}

	throw new Error(`Could not find ${TargetComponent} in rendered
    instance: ${componentInstance}; gave up after ${maxTries} tries`);
}
