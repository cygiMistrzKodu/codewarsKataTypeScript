"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
function testing(p0, percent, aug, p, expected) {
    chai_1.assert.strictEqual((0, solution_1.nbYear)(p0, percent, aug, p), expected);
}
describe("Fixed Tests", function () {
    it("Basic tests nbYear", function () {
        testing(1500, 5, 100, 5000, 15);
        testing(1500000, 2.5, 10000, 2000000, 10);
        testing(1500000, 0.25, 1000, 2000000, 94);
        testing(1500000, 0.25, -1000, 2000000, 151);
        testing(1500000, 0.25, -1000, 2000000, 151);
        testing(1000, 2, 50, 1214, 4);
        testing(1500000, 0, 10000, 2000000, 50);
    });
});
