import React from "react";
import { mount } from "enzyme";

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
