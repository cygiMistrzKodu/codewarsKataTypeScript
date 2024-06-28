"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Cube?", function () {
    it("Basic tests", function () {
        chai_1.assert.isTrue((0, solution_1.cubeChecker)(1, 1));
        chai_1.assert.isTrue((0, solution_1.cubeChecker)(8, 2));
        chai_1.assert.isTrue((0, solution_1.cubeChecker)(27, 3));
        chai_1.assert.isFalse((0, solution_1.cubeChecker)(0, 35));
        chai_1.assert.isFalse((0, solution_1.cubeChecker)(452, 1));
        chai_1.assert.isFalse((0, solution_1.cubeChecker)(785, 0));
        chai_1.assert.isFalse((0, solution_1.cubeChecker)(367, -18));
        chai_1.assert.isFalse((0, solution_1.cubeChecker)(0, 0));
    });
});
