"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("Basic Tests", function () {
    it("It should works for basic tests", function () {
        chai_1.assert.strictEqual((0, solution_1.remove)("Hi!"), "Hi");
        chai_1.assert.strictEqual((0, solution_1.remove)("Hi!!!"), "Hi!!");
        chai_1.assert.strictEqual((0, solution_1.remove)("!Hi"), "!Hi");
        chai_1.assert.strictEqual((0, solution_1.remove)("!Hi!"), "!Hi");
        chai_1.assert.strictEqual((0, solution_1.remove)("Hi! Hi!"), "Hi! Hi");
        chai_1.assert.strictEqual((0, solution_1.remove)("Hi"), "Hi");
    });
});
