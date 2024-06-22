import { websites } from '../src/solution';
import { assert } from "chai";

describe("solution", function() {
  it("Basic tests", function() {
    assert.notStrictEqual(websites.length, 0, 'The array is still empty');
    assert.strictEqual(websites.length, 1, 'The array contains too many values');
    assert.strictEqual(websites[0], 'codewars', 'The array does not contain the correct value "codewars"');
  });
});