"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Lario and Muigi Pipe Problem", () => {
    it("Fixed tests", () => {
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'You must return an array from 1-9');
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'You must return an array from 1-12');
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([6, 9]), [6, 7, 8, 9], 'You must return an array from 6-9');
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([-1, 4]), [-1, 0, 1, 2, 3, 4], 'You must return an array from -1-4');
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([1, 2, 3]), [1, 2, 3], 'You must return an array from 1-3');
        chai_1.assert.deepEqual((0, solution_1.pipeFix)([2]), [2]);
    });
});
