import {Kata} from '../src/solution';
import {assert} from "chai";

describe("solution", function() {
  it("basic tests", function() {
    assert.strictEqual(Kata.findLongest([1, 10, 100]), 100);
    assert.strictEqual(Kata.findLongest([9000, 8, 800]), 9000);
    assert.strictEqual(Kata.findLongest([8, 900, 500]), 900);
    assert.strictEqual(Kata.findLongest([ 6440, 185256, 200208, 37989, 68256 ]), 185256);
  });
})