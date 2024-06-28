"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Basic tests", () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, solution_1.nearestSq)(1), 1);
        chai_1.assert.equal((0, solution_1.nearestSq)(2), 1);
        chai_1.assert.equal((0, solution_1.nearestSq)(10), 9);
        chai_1.assert.equal((0, solution_1.nearestSq)(111), 121);
        chai_1.assert.equal((0, solution_1.nearestSq)(9999), 10000);
    });
});
