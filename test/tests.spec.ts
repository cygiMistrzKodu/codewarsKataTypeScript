import {findAverage} from "../src/solution";
import {assert} from "chai";

describe("solution", () => {
  it('should calculate avg of given numbers',() => {
    assert.strictEqual(findAverage([1,1,1]), 1);
  });
});