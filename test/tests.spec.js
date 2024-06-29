"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("solution", function () {
    it("basic tests", function () {
        chai_1.assert.strictEqual(solution_1.Kata.findLongest([1, 10, 100]), 100);
        chai_1.assert.strictEqual(solution_1.Kata.findLongest([9000, 8, 800]), 9000);
        chai_1.assert.strictEqual(solution_1.Kata.findLongest([8, 900, 500]), 900);
        chai_1.assert.strictEqual(solution_1.Kata.findLongest([6440, 185256, 200208, 37989, 68256]), 185256);
    });
});
