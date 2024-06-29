"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Sample Test Cases", function () {
    it("Testing for fixed test", () => {
        chai_1.assert.strictEqual((0, solution_1.strCount)('Hello', 'o'), 1);
        chai_1.assert.strictEqual((0, solution_1.strCount)('Hello', 'l'), 2);
        chai_1.assert.strictEqual((0, solution_1.strCount)('', 'z'), 0);
    });
});
