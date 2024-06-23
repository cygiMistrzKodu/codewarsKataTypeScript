"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Holiday VIII - Duty Free", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, solution_1.dutyFree)(12, 50, 1000), 166);
        chai_1.assert.strictEqual((0, solution_1.dutyFree)(17, 10, 500), 294);
        chai_1.assert.strictEqual((0, solution_1.dutyFree)(24, 35, 3000), 357);
        chai_1.assert.strictEqual((0, solution_1.dutyFree)(1400, 35, 10000), 20);
        chai_1.assert.strictEqual((0, solution_1.dutyFree)(700, 26, 7000), 38);
    });
});
