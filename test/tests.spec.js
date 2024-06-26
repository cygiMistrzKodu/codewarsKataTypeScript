"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("One's and Zero's", () => {
    it("Example tests", () => {
        chai_1.assert.strictEqual((0, solution_1.binaryArrayToNumber)([0, 0, 0, 1]), 1);
        chai_1.assert.strictEqual((0, solution_1.binaryArrayToNumber)([0, 0, 1, 0]), 2);
        chai_1.assert.strictEqual((0, solution_1.binaryArrayToNumber)([1, 1, 1, 1]), 15);
        chai_1.assert.strictEqual((0, solution_1.binaryArrayToNumber)([0, 1, 1, 0]), 6);
    });
});
