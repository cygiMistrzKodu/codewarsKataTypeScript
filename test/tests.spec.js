"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("Fixed Tests", function () {
    it("Basic tests mxdiflg", function () {
        let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
        let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        chai_1.assert.equal((0, solution_1.mxdiflg)(s1, s2), 13);
        s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
        s2 = ["bbbaaayddqbbrrrv"];
        chai_1.assert.equal((0, solution_1.mxdiflg)(s1, s2), 10);
        s2 = [];
        s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        chai_1.assert.equal((0, solution_1.mxdiflg)(s1, s2), -1);
    });
});
