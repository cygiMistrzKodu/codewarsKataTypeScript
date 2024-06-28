"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("reverseList", function () {
    it("should reverse some sample arrays", function () {
        chai_1.assert.deepEqual((0, solution_1.reverseList)([1, 2, 3, 4]), [4, 3, 2, 1], "Input=[1,2,3,4]");
        chai_1.assert.deepEqual((0, solution_1.reverseList)([3, 1, 5, 4]), [4, 5, 1, 3], "Input=[3,1,5,4]");
    });
});
