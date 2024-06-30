"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("predictAge", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, solution_1.predictAge)(65, 60, 75, 55, 60, 63, 64, 45), 86);
        chai_1.assert.equal((0, solution_1.predictAge)(32, 54, 76, 65, 34, 63, 64, 45), 79);
    });
});
