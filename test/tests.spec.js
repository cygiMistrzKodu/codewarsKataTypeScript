"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
chai_1.config.truncateThreshold = 0;
describe("Fixed tests", function () {
    it("should return an empty array if there are no even numbers", function () {
        chai_1.assert.deepEqual((0, solution_1.getEvenNumbers)([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
        chai_1.assert.deepEqual((0, solution_1.getEvenNumbers)([1, 2]), [2]);
        chai_1.assert.deepEqual((0, solution_1.getEvenNumbers)([12, 14, 15]), [12, 14]);
        chai_1.assert.deepEqual((0, solution_1.getEvenNumbers)([13, 15]), []);
        chai_1.assert.deepEqual((0, solution_1.getEvenNumbers)([1, 3, 9]), []);
    });
});
