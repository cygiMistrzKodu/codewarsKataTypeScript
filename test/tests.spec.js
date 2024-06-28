"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Keep up the hoop", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, solution_1.hoopCount)(6), "Keep at it until you get it");
        chai_1.assert.strictEqual((0, solution_1.hoopCount)(10), "Great, now move on to tricks");
        chai_1.assert.strictEqual((0, solution_1.hoopCount)(22), "Great, now move on to tricks");
    });
});
