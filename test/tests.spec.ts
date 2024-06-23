import { assert } from "chai";

import { dutyFree } from "../src/solution";

describe("Holiday VIII - Duty Free", () => {
  it("Fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);
    assert.strictEqual(dutyFree(1400, 35, 10000), 20);
    assert.strictEqual(dutyFree(700, 26, 7000), 38);
  });
});
