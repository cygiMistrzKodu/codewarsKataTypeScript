"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("solution", function () {
    it("Basic tests", function () {
        chai_1.assert.notStrictEqual(solution_1.websites.length, 0, 'The array is still empty');
        chai_1.assert.strictEqual(solution_1.websites.length, 1, 'The array contains too many values');
        chai_1.assert.strictEqual(solution_1.websites[0], 'codewars', 'The array does not contain the correct value "codewars"');
    });
});
