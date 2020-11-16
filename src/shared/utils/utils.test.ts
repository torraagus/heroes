import React from "react";
import { assert, expect } from "chai";
import { shallow } from "enzyme";
import { getRandomInt, isEmpty } from "./utils";

describe("src/shared/utils.ts", () => {
	it("should call isEmpty with empty object or array and return true", () => {
		expect(isEmpty({})).to.equals(true);
		expect(isEmpty([])).to.equals(true);
	});
	
	it("should call isEmpty with populated object or array and return true", () => {
		expect(isEmpty({a:1,b:2})).to.equals(false);
		expect(isEmpty([1,2])).to.equals(false);
	});
	
	it("should call getRandomInt and return a valid random number", () => {
		const min = 10, max = 20;
		expect(getRandomInt(min, max)).to.be.lessThan(21);
		expect(getRandomInt(min, max)).to.be.greaterThan(9);
	});
});
