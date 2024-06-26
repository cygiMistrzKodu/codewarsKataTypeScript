import {mxdiflg} from '../src/solution'
import {assert} from "chai";


describe("Fixed Tests", function() {
    it("Basic tests mxdiflg", function() {        
        
        let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
        let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        assert.equal(mxdiflg(s1, s2), 13);
        s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
        s2 = ["bbbaaayddqbbrrrv"];
        assert.equal(mxdiflg(s1, s2), 10);
        s2 = [];
        s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        assert.equal(mxdiflg(s1, s2), -1);
    });
});