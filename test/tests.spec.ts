import { assert } from "chai";
import { cubeChecker } from "../src/solution";

describe("Cube?", function() {
  it("Basic tests", function() {
      assert.isTrue(cubeChecker(1, 1));
      assert.isTrue(cubeChecker(8, 2));
      assert.isTrue(cubeChecker(27, 3));
      assert.isFalse(cubeChecker(0, 35));
      assert.isFalse(cubeChecker(452, 1));
      assert.isFalse(cubeChecker(785, 0));
      assert.isFalse(cubeChecker(367, -18));
      assert.isFalse(cubeChecker(0, 0));
  });
});