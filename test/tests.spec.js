"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Example Tests", function () {
    it("one", function () {
        chai_1.assert.deepEqual((0, solution_1.humanYearsCatYearsDogYears)(1), [1, 15, 15]);
    });
    it("two", function () {
        chai_1.assert.deepEqual((0, solution_1.humanYearsCatYearsDogYears)(2), [2, 24, 24]);
    });
    it("ten", function () {
        chai_1.assert.deepEqual((0, solution_1.humanYearsCatYearsDogYears)(10), [10, 56, 64]);
    });
});
