"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe('removeChar', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, solution_1.removeChar)('eloquent'), 'loquen');
        chai_1.assert.equal((0, solution_1.removeChar)('country'), 'ountr');
        chai_1.assert.equal((0, solution_1.removeChar)('person'), 'erso');
        chai_1.assert.equal((0, solution_1.removeChar)('place'), 'lac');
    });
});
