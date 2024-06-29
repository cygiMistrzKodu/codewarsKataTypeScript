// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { sumDigits } from "../src/solution";

describe("example", function() {
  it("test", function() {
    assert.equal(sumDigits(10), 1);
    assert.equal(sumDigits(99), 18);
    assert.equal(sumDigits(-32), 5);
  });
});