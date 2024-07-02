"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// See https://www.chaijs.com for how to use Chai.
const chai_1 = require("chai");
const solution_1 = require("../src/solution");
describe("Tests", () => {
    it("test", () => {
        chai_1.assert.strictEqual((0, solution_1.pigIt)('Pig latin is cool'), 'igPay atinlay siay oolcay');
        chai_1.assert.strictEqual((0, solution_1.pigIt)('This is my string'), 'hisTay siay ymay tringsay');
        chai_1.assert.strictEqual((0, solution_1.pigIt)('Hello world !'), 'elloHay orldway !');
        chai_1.assert.strictEqual((0, solution_1.pigIt)('ifNLjP  pw nyBJDdBueCngAemQYg eYOwNeUWFLaYGnNlYh ? nLghKL vRqmowQDZYhalGw'), 'fNLjPiay  wpay yBJDdBueCngAemQYgnay YOwNeUWFLaYGnNlYheay ? LghKLnay RqmowQDZYhalGwvay');
    });
});
