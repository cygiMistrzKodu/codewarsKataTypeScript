import {predictAge} from "../src/solution";
import {assert} from "chai";

describe("predictAge", function() {
  it("Sample tests", function() {
    assert.equal(predictAge(65,60,75,55,60,63,64,45), 86);
    assert.equal(predictAge(32,54,76,65,34,63,64,45), 79);
  });
});