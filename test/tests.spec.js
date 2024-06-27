"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
// import the type of assertion library you wish to use (Chai recommended)
const chai_1 = require("chai");
// TODO: Replace examples and use TDD development by writing your own tests
describe("solution", function () {
    it("should handle array with one number", () => {
        (0, chai_1.expect)((0, solution_1.distinct)([1])).to.eql([1]);
    });
    it("should handle array with two numbers but no duplicates", () => {
        (0, chai_1.expect)((0, solution_1.distinct)([1, 2])).to.eql([1, 2]);
    });
    it("should handle array with two numbers and a duplicate", () => {
        (0, chai_1.expect)((0, solution_1.distinct)([1, 1, 2])).to.eql([1, 2]);
    });
});
