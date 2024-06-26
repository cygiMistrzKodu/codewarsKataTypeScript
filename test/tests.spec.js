"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        chai_1.assert.strictEqual((0, solution_1.toBinary)(1), 1);
        chai_1.assert.strictEqual((0, solution_1.toBinary)(2), 10);
        chai_1.assert.strictEqual((0, solution_1.toBinary)(3), 11);
        chai_1.assert.strictEqual((0, solution_1.toBinary)(5), 101);
    });
});
