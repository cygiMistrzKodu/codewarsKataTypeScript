"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("solution", () => {
    it('should calculate avg of given numbers', () => {
        chai_1.assert.strictEqual((0, solution_1.findAverage)([1, 1, 1]), 1);
        chai_1.assert.strictEqual((0, solution_1.findAverage)([]), 0);
    });
});
