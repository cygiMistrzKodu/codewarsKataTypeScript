"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Basic tests", () => {
    it("Should pass basic tests", () => {
        chai_1.assert.equal((0, solution_1.checkExam)(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
        chai_1.assert.equal((0, solution_1.checkExam)(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
        chai_1.assert.equal((0, solution_1.checkExam)(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
        chai_1.assert.equal((0, solution_1.checkExam)(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
    });
});
