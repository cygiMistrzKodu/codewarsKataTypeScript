"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Basic tests", () => {
    it("Testing for 0", () => chai_1.assert.strictEqual((0, solution_1.factorial)(0), 1));
    it("Testing for 1", () => chai_1.assert.strictEqual((0, solution_1.factorial)(1), 1));
    it("Testing for 4", () => chai_1.assert.strictEqual((0, solution_1.factorial)(4), 24));
    it("Testing for 7", () => chai_1.assert.strictEqual((0, solution_1.factorial)(7), 5040));
    it("Testing for 17", () => chai_1.assert.strictEqual((0, solution_1.factorial)(17), 355687428096000));
});
