"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("example", function () {
    it("test", function () {
        chai_1.assert.equal((0, solution_1.sumDigits)(10), 1);
        chai_1.assert.equal((0, solution_1.sumDigits)(99), 18);
        chai_1.assert.equal((0, solution_1.sumDigits)(-32), 5);
    });
});
